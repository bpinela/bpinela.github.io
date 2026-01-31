import { Github, Linkedin, SquareCode } from "lucide-react";

const About: React.FC = () => {
  return (
    <main className="items-center justify-center h-[calc(100vh-60px)] px-16 py-16">
      <section>
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p className="text-base leading-7 text-muted-foreground mb-4">
          Front-end Engineer with over 10 years of experience. I&apos;ve been
          developing software professionally since 2013, starting with
          full-stack web development and later focusing deeply on front-end
          technologies. I&apos;ve worked with companies of various sizes, from
          startups like GameBlast to enterprise-scale environments such as
          Alterdata, Objective Solutions, and OSF Global.
        </p>
        <p className="text-base leading-7 text-muted-foreground mb-4">
          In recent years, I&apos;ve been a consultant at{" "}
          <a
            href="https://www.redspark.io/"
            className="underline text-primary hover:text-primary/80"
          >
            Redspark
          </a>
          , contributing to strategic projects for B3, the Brazilian stock
          exchange. My main expertise lies in React and Next.js, though I also
          have solid experience with Angular and React Native. I enjoy building
          clean, maintainable UIs and working closely with designers and
          back-end teams to deliver complete product experiences.{" "}
        </p>

        <p>
          I&apos;m also passionate about emerging technologies, especially AI
          and conversational interfaces and play chess on free time ♙
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
        <div className="flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/bruno-pinela/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/bpinela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </a>
          <a
            href="https://dev.to/bpinela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
          >
            <SquareCode className="w-5 h-5" />
            <span>DevTo</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
