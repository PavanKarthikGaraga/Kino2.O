"use server";

import { pool } from "../../../../config/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('👉 Login attempt for:', body.username);

        const { username, password } = body;

        try {
            // Modified query to only get users with valid roles
            const [rows] = await pool.query(
                'SELECT u.*, r.id_number, r.phone, r.college FROM users u LEFT JOIN registrations r ON (u.username = r.username OR u.email = r.email) WHERE (u.username = ? OR u.email = ?) AND u.role IN ("SuperAdmin", "Admin")',
                [username, username]
            );
            console.log('Query result:', rows);

            const users = rows as any[];
            
            if (users.length === 0) {
                return NextResponse.json(
                    { message: "Invalid credentials" },
                    { status: 401 }
                );
            }

            const user = users[0];
            
            // Verify password using bcrypt
            const isValidPassword = await bcrypt.compare(password, user.password);
            
            if (!isValidPassword) {
                return NextResponse.json(
                    { message: "Invalid credentials" },
                    { status: 401 }
                );
            }

            console.log('User found:', { ...user, password: '[REDACTED]' });

            const token = Buffer.from(Date.now().toString()).toString('base64');

            // Add role-specific data to the response
            const roleSpecificData = {
                SuperAdmin: {
                    permissions: ['all'],
                    dashboardRoute: '/super-admin/dashboard'
                },
                Admin: {
                    permissions: ['limited'],
                    dashboardRoute: '/admin/dashboard'
                }
            };

            const response = NextResponse.json({
                message: "Authenticated",
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    id_number: user.id_number,
                    phone: user.phone,
                    college: user.college,
                    ...roleSpecificData[user.role as keyof typeof roleSpecificData]
                },
                token: token
            });

            response.cookies.set({
                name: 'token',
                value: token,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/'
            });

            return response;

        } catch (dbError: any) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { message: "Database error", details: dbError.message },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error('Server error:', error);
        return NextResponse.json(
            { message: "Server error", details: error.message },
            { status: 500 }
        );
    }
}