import {
  Check,
  Instagram,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Send,
} from "lucide-react";

const services = [
  {
    title: "Mental Health Service",
    img: "../imag27.png",
    description:
      "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
  },
  {
    title: "Eye Diseasses Service",
    img: "../img28.png",
    description:
      "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
  },
  {
    title: "Vaccination Service",
    img: "../img29.png",
    description:
      "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
  },
  {
    title: "Cardiology Service",
    img: "../img30.png",
    description:
      "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
  },
];

function App() {
  return (
    <div className="bg-slate-50">
      <section className="px-2 text-xs md:text-base md:px-36 py-2 bg-primary w-full flex items-center justify-between text-white">
        <div className="flex items-center gap-8">
          <div className="flex space-x-2 gap-2">
            <MapPin /> 90919 Madie run Apt. 790
          </div>
          <div className="flex space-x-2 gap-2">
            <Mail /> medico@health.care
          </div>
        </div>
        <div className="flex space-x-2 gap-2 underline underline-offset-1">
          <Instagram />
          Connect on Instagram
        </div>
      </section>

      {/* header nav */}
      <section className=" justify-center hidden md:flex">
        <div className="flex items-center justify-between bg-white px-5 py-7 rounded m-4 w-auto md:w-[1134px] h-[95px]">
          <div className="flex gap-2">
            <img className="w-6 h-6" src="../logo.png" alt="logo" />
            <h3 className="font-bold text-xl">Medico</h3>
          </div>
          <ul className="flex list-none gap-8 font-medium cursor">
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">
              Health Checkup
            </li>
            <li className="cursor-pointer hover:text-primary">Doctors</li>
            <li className="cursor-pointer hover:text-primary">Departments</li>
          </ul>
          <div className="flex gap-2">
            <Phone />
            <p className="font-bold text-lg">1005-346-272</p>
          </div>
          <button className="btn-primary">Appointment</button>
        </div>
      </section>

      {/* hero */}
      <section className="px-0 md:px-36 py-10  items-center justify-between md:flex">
        <div className="hidden md:block relative bg-secondary w-[497px] h-[447px] rounded-2xl">
          <div className="absolute flex gap-2 p-3 items-center top-20 -left-14 bg-white rounded w-[150px] h-12">
            <img className="w-6 h-6" src="../header_icon.png" alt="" />
            <p className="text-xs font-medium">
              More than 10k patients treated
            </p>
          </div>
          <img
            className="absolute bottom-0 left-6"
            src="../image 32.png"
            alt=""
          />
        </div>
        <div className="w-full text-center md:text-left md:max-w-[554px] ">
          <p className="text-primary line text-lg font-medium text-center md:text-left">
            Welcome to Medico Healthcare
          </p>
          <h3 className="md:text-7xl text-5xl font-semibold mt-4">
            Your Journey to Better Health Starts Here
          </h3>
          <button className="btn-primary mt-12">Discover More</button>
        </div>
      </section>

      {/* section 2 */}
      <section className="text-center md:h-[700px] md:text-left px-5 md:px-36 py-16 mt-10">
        <h1 className="font-semibold text-5xl">
          Dedicated to provide best treatment.
        </h1>
        <p className="mt-10 md:w-[883px] h-16 text-md md:text-lg font-normal md:leading-6">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </p>

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 text-center md:text-left  gap-36 mt-20">
          <div className="relative text-center">
            <img src="../image41.png" alt="" />
            <p className="absolute font-medium text-md rounded-3xl -bottom-7 left-7 p-4 bg-primary text-white w-[192px]">
              For your health <span className="text-2xl">Pediatrician</span>
            </p>
          </div>
          <div className="relative text-center">
            <img src="../image42.png" alt="" />
            <p className="absolute font-medium text-md rounded-3xl -bottom-7 left-7 p-4 bg-primary text-white w-[192px]">
              For your health <span className="text-2xl">Cardiologist</span>
            </p>
          </div>
          <div className="relative text-center">
            <img src="../image43.png" alt="" />
            <p className="absolute font-medium text-md rounded-3xl -bottom-7 left-7 p-4 bg-primary text-white w-[192px]">
              For your health <span className="text-2xl">Dermatologist</span>
            </p>
          </div>
        </div>
      </section>

      {/* service & treat */}
      <section className="md:px-36 mt-16 md:h-[777px]">
        <div className="md:flex text-center md:text-left items-end justify-between">
          <div className="md:w-[538px] h-24">
            <p className="uppercase font-bold text-sm text-primary">
              Service & Treatments
            </p>
            <h1 className="mt-2 font-semibold text-5xl">
              More than 40 specialty and health care services
            </h1>
          </div>
          <button className="btn-primary mt-28 md:mt-0">
            See All Services
          </button>
        </div>

        {/* service card */}
        <div className="px-6 block md:flex md:justify-center">
          <div className="mt-6 grid p-8 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            {services.map((service) => (
              <div className="relative mt-16 p-4 gap-4 flex justify-between bg-white rounded-lg h-44 md:w-[458px] md:h-[200px]">
                <div className="p-2">
                  <img className="w-16 md:w-9" src={service.img} alt="" />
                </div>
                <div className="">
                  <h1 className="text-xl md:text-3xl font-semibold">
                    {service.title}
                  </h1>
                  <p className="text-md font-normal mt-4 md:w-[350px]">
                    {service.description}
                  </p>
                </div>

                <div className="absolute right-0 bottom-0 rounded-br-lg bg-gray-300 px-4 py-2">
                  <MoveRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* wellness section */}
      <section className="pt-64 md:pt-20 md:px-36 md:h-[742px] bg-white">
        <div className="px-12 text-center md:text-left md:flex justify-between items-center md:items-end md:h-[340px]">
          <div className="relative flex jus bg-secondary md:w-[385px] h-[128px] rounded-2xl">
            <img
              className="absolute bottom-0 right-8"
              src="../image36.png"
              alt=""
            />
          </div>

          <div className="flex justify-center md:none">
            <ul className="mr-14 mb-12 text-center">
              <h1 className="mt-12 md:mt-0 mb-8 text-4xl md:text-5xl font-semibold">
                Why Choose Us?
              </h1>
              <li className="flex gap-4 font-medium text-base mt-2">
                <Check className="bg-primary text-white p-1 rounded-full" />
                <div>Safety First Quality Must</div>
              </li>
              <li className="flex gap-4 font-medium text-base mt-4">
                <Check className="bg-primary text-white p-1 rounded-full" />
                <div>Patient-Centric Approach</div>
              </li>
              <li className="flex gap-4 font-medium text-base mt-4">
                <Check className="bg-primary text-white p-1 rounded-full" />
                <div>Cutting-Edge Technology</div>
              </li>
              <li className="flex gap-4 font-medium text-base mt-4">
                <Check className="bg-primary text-white p-1 rounded-full" />
                <div>Transparent Pricing</div>
              </li>
              <li className="flex gap-4 font-medium text-base mt-4">
                <Check className="bg-primary text-white p-1 rounded-full" />
                <div>Coordinated Care</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 px-12 text-center md:text-left">
          <h1 className="text-4xl font-semibold">
            Wellness, Compassion, Quality
          </h1>
          <p className="mt-4 md:w-[844px] leading-6">
            They live in Bookmarks grove right at the coast of the Semantics, a
            large language ocean. A small river named Duden flows by their place
            and supplies it.
          </p>
          <button className="btn-primary mt-6">Take an appointment</button>
        </div>
      </section>

      {/* health checkup plans */}
      <section className="md:px-36 md:h-[977px]">
        <div className="mt-24 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">Health Checkup Plans</h1>
            <p className="mt-4 leading-6 md:w-[520px]">
              They live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean named flows.
            </p>

            <div className="mt-6 flex items-center justify-center  py-4 rounded-lg gap-8 bg-white">
              <div className="text-base font-medium inline-block bg-primary rounded-xl p-3 text-white">
                Woman Health
              </div>
              <div className="text-base font-medium cursor-pointer hover:text-primary">
                Cancer Screening
              </div>
              <div className="text-base font-medium cursor-pointer hover:text-primary">
                Kids Vaccines
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 px-16 flex items-center justify-center md:justify-between md:items-end md:h-[340px]">
          <div className="md:text-left text-center">
            <div className="flex justify-center md:justify-normal">
              <img
                className="bg-primary rounded-full text-white p-1 w-12"
                src="../healthcare.png"
                alt="logo"
              />
            </div>
            <h1 className="mt-6 text-4xl font-semibold">
              Women Health Checkup
            </h1>
            <p className="mt-4 md:w-[511px] leading-6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </p>
            <div className="flex justify-center md:justify-normal">
              <ul className="mt-4">
                <li className="flex gap-4 font-medium text-base mt-2">
                  <Check className="bg-black text-white p-1 rounded-full" />
                  <div>Complete Blood Count with ESR</div>
                </li>
                <li className="flex gap-4 font-medium text-base mt-2">
                  <Check className="bg-black text-white p-1 rounded-full" />
                  <div>Lipid Profile, Live Profile, kidney Profile </div>
                </li>
                <li className="flex gap-4 font-medium text-base mt-2">
                  <Check className="bg-black text-white p-1 rounded-full" />
                  <div>USG Abdomen with Pelvis, Mammography</div>
                </li>
              </ul>
            </div>
            <button className="btn-primary mt-12 ">Take an appointment</button>
          </div>

          <div className="relative hidden md:block bg-secondary w-[385px] h-[128px] mt-8 mr-8 rounded-2xl">
            <img
              className="absolute bottom-0 left-4"
              src="../image30.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* form section */}
      <section className="px-8 md:px-36 pt-36 md:pt-0 h-auto md:h-[677px]">
        <div className="md:flex gap-4 text-center md:text-left">
          <div className="md:h-24">
            <p className="uppercase font-bold text-sm text-primary">
              appointment
            </p>
            <h1 className="mt-2 font-semibold text-5xl">
              Get in touch to book your first appointment
            </h1>
            <p className="my-9 leading-6 md:w-[414px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <div className="flex justify-center md:justify-normal">
              <ul className="mt-4">
                <li className="flex gap-4 font-medium text-base mt-2">
                  <Mail className="bg-primary text-white p-1 rounded-full" />
                  <div>(123) 456-7890</div>
                </li>
                <li className="flex gap-4 font-medium text-base mt-6">
                  <Phone className="bg-primary text-white p-1 rounded-full" />
                  <div>medico@health.care</div>
                </li>
              </ul>
            </div>
          </div>

          <form
            className="bg-white rounded mt-16
           px-8 pt-6  md:w-[475px]"
          >
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <input
                className=" appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className=" appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Select appointment Type"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-700 border rounded-lg leading-tight focus:outline-none focus:shadow-outline placeholder:text-md"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mb-4">
              <button className="btn-primary w-full">Submit Now</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mt-12 px-36 py-6 bg-primary text-white border-t w-full">
        <section className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-5">
            <div className="space-y-3">
              <header className="flex space-x-1">
                <img className="w-6 h-6" src="../healthcare.png" />
                <span className=" font-semibold cursor-pointer sm:inline-block">
                  Medico
                </span>
              </header>
              <div className="pt-12 space-y-3">
                <button className="flex gap-2 border border-white rounded-xl p-2">
                  <Send className="w-4" />
                  Take an appointment
                </button>
                <button className="flex gap-2 border border-white rounded-xl p-2">
                  <Instagram className="w-4" />
                  Take an appointment
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-semibold uppercase">Services</h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Pathology
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Ambulance
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Radiology
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Pharmacy
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-semibold uppercase">
                Health Checkup
              </h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Woman Health
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Cancer Screening
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Cardiac Health
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  MRI Checkup
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-semibold uppercase">Department</h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  General
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Dermatology
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Cardiology
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Cancer
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-semibold uppercase">Quick Links</h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  License
                </li>
                <li className="text-sm text-muted-foreground transition-colors cursor-pointer hover:text-foreground">
                  Changelog
                </li>
              </ul>
            </div>
          </section>
        </section>
      </footer>
    </div>
  );
}

export default App;
