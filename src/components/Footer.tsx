import { useTranslations } from "next-intl";

export default function Footer() {
  const f = useTranslations("Footer");

  return (
    <footer className="w-full border-t backdrop-blur-sm bg-background/95 py-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="/black-screen"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Black Screen
          </a>
          <a
            href="/white-screen"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            White Screen
          </a>
          <a
            href="/do-not-write-on-this-page"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Do Not Write On This Page
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          {f("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
