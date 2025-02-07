
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  disability?: {
    status: "visible" | "non-visible" | "none";
  };
  userRole: "coach" | "mentor" | "admin";
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const Profile = ({
  name,
  role,
  bio,
  avatar,
  disability,
  userRole,
  social,
}: ProfileProps) => {
  return (
    <div className="w-full max-w-md mx-auto animate-profile-appear">
      <div className="relative bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-opacity-50 transition-all duration-300 hover:shadow-xl">
        {/* Avatar */}
        <div className="relative mx-auto w-32 h-32 mb-6">
          <div className="absolute inset-0 bg-profile-accent rounded-full opacity-10 animate-pulse" />
          <img
            src={avatar}
            alt={name}
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Name and Role */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-profile-dark mb-1">{name}</h2>
          <p className="text-profile-neutral">{role}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-sm px-3 py-1 rounded-full bg-profile-accent/10 text-profile-accent">
              {userRole}
            </span>
            {disability && disability.status !== "none" && (
              <span className="text-sm px-3 py-1 rounded-full bg-profile-secondary/10 text-profile-secondary">
                {disability.status} disability
              </span>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="text-center text-profile-neutral mb-6">{bio}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-profile-neutral hover:text-profile-accent transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-profile-neutral hover:text-profile-secondary transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-profile-neutral hover:text-profile-tertiary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Contact Button */}
        <Button
          className="w-full bg-profile-accent hover:bg-profile-accent/90 text-profile-dark transition-all duration-300 hover:shadow-md"
          onClick={() => window.location.href = "mailto:contact@example.com"}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Profile;
