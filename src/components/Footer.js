import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="https://mockittapp.wondershare.com/proto/Sqxw8jsCru40s1tYnn4hH7/sharing?view_mode=device&screen=rbpTdFLsvXpwSrRYT&canvasId=rcTdFLsvTdFTmRj7aYgdY3 #Boletika Prototipo-分享  "
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Maquetado
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Boletika.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
