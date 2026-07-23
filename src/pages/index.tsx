const projects = [
  {
    name: "Muzyka",
    href: "https://github.com/RpaceIV/muzyka",
    description:
      "A Python app that recommends music subgenres from a naive Bayes classifier over five preference questions.",
  },
  {
    name: "COVID-19 Vaccination Analysis",
    href: "https://github.com/allenrrivas/COVID-19",
    description:
      "Linear regression models in R predicting national vaccination rates from GDP, demographics, and time.",
  },
  {
    name: "Hotel Reservation System",
    href: "https://github.com/allenrrivas/HotelReservationSystem",
    description:
      "A C++ hotel booking system with a layered domain, application, and technical-services architecture.",
  },
  {
    name: "allenrrivas.dev",
    href: "https://github.com/allenrrivas/allenrrivas.dev",
    description: "This website.",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-extrabold">Allen Rivas</h1>

      <h2 className="mt-10 text-2xl font-bold">Projects</h2>

      <ul className="mt-4 list-none space-y-4">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold transition-colors hover:text-indigo-400"
            >
              {project.name}
            </a>
            <p className="text-sm text-neutral-400">{project.description}</p>
          </li>
        ))}
      </ul>

      <footer className="mt-8 flex gap-6 text-sm text-neutral-400">
        <a
          href="https://github.com/allenrrivas"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-indigo-400"
        >
          GitHub
        </a>
        <a
          href="mailto:allenrrivas.30@gmail.com"
          className="transition-colors hover:text-indigo-400"
        >
          Email
        </a>
      </footer>
    </main>
  );
}
