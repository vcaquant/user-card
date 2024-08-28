import { Layout } from "@/src/components/layout";
import { UserCardSimple } from "@/src/components/UserCardSimple";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Layout className="h-full mt-4 items-center">
        <div>
          <UserCardSimple
            user={{
              firstname: "Victorien",
              lastname: "Caquant",
              username: "victo_nothing",
              avatar:
                "https://media.licdn.com/dms/image/v2/C4D03AQFPP4lL3eGkWw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548172396469?e=1730332800&v=beta&t=G4ENsEQXUCki-C2XaXJcNlov5KEl1foKEPQZZC_rpNU",
              description:
                "<b>Front-end developer</b> with <b>6 years</b> of experience.<br />I am passionate about web development and I am always looking for new challenges.<br/>Expert in <b>React, Next.js, and TailwindCSS</b>.",
              links: {
                linkedin:
                  "https://www.linkedin.com/in/victorien-caquant-339674110/",
                github: "https://github.com/vcaquant",
                x: "https://www.x.com/johndoe",
                facebook: "https://www.facebook.com/johndoe",
                instagram: "https://www.instagram.com/johndoe",
              },
            }}
          />
        </div>
      </Layout>
    </div>
  );
}
