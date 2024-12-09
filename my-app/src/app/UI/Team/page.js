"use client";
import "./team.css";
// import Link from "next/link";
import Image from "next/image";

const Team = () => {
    return (
        <div className="team-container" id="team">
            <div className="team-container-in">
                <div className="team-container-in-one">
                    <h2>Our Creative Team</h2>
                </div>
                <div className="team-container-in-image">
                    <Image 
                        src="https://i.imghippo.com/files/VIZ9107fTw.png" 
                        width={500} 
                        height={500} 
                        alt="Team"
                        className="team-image"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Team;    