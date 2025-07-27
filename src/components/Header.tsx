import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const t = useTranslations("Index");
  return (
    <header className="w-full border-b backdrop-blur-sm bg-background/95 flex-shrink-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-between">
          <div>
            <a className="font-bold text-base sm:text-lg lg:text-xl" href="/">
              {t("appName")}
            </a>
          </div>

          <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <a
              href="/black-screen"
              className="px-2 py-1 text-sm hover:text-primary flex items-center "
            >
              Black Screen
            </a>
            <a
              href="/white-screen"
              className="px-2 py-1 text-sm hover:text-primary flex items-center"
            >
              White Screen
            </a>
            <a
              href="/do-not-write-on-this-page"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Do Not Write On This Page
            </a>
          </nav>

          <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <LanguageSwitcher />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
