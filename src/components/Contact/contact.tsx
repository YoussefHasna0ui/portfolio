import Link from "next/link";

export default function Contact() {
  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-zinc-800 mt-20 text-base h-full">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Möchten Sie mit mir in Kontakt treten? Lassen Sie uns sprechen.
      </h5>
      <p className="mb-5 text-gray-800 dark:text-gray-200">
        Hinterlassen Sie Ihre Nachricht, und lassen Sie uns Ihre Anliegen
        besprechen.
      </p>
      <div className="flex justify-between">
        <Link
          href="https://wa.me/21628257211"
          className="mt-5 px-4 text-center w-max font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
          type="submit"
        >
          Chat auf WhatsApp
        </Link>
        <Link
          href="mailto:hasnaouiyoussef050@gmail.com"
          className="mt-5 px-4 text-center w-max font-bold h-8 bg-indigo-400 dark:bg-indigo-300 text-white py-1 dark:text-gray-900 rounded"
          type="submit"
        >
          Eine E-Mail senden
        </Link>
        <Link
          href="https://x.com/YoussefHasna0ui" // Replace with your actual Twitter username
          className="mt-5 px-4 text-center w-max font-bold h-8 bg-black text-white py-1 rounded"
          type="submit"
        >
          Chat auf X
        </Link>
      </div>
    </div>
  );
}
