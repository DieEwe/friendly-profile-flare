
import Profile from "@/components/Profile";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-profile-accent/20 to-profile-tertiary/10 p-6">
      <Profile
        name="Sarah Anderson"
        role="Product Designer"
        bio="Passionate about creating beautiful and functional user experiences. Focusing on minimal design and intuitive interactions."
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop"
        disability={{
          status: "non-visible"
        }}
        userRole="mentor"
        social={{
          github: "https://github.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        }}
      />
    </div>
  );
};

export default Index;
