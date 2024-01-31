import { Check, Instagram, Mail, MapPin, MoveRight, Phone } from "lucide-react";

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
        <div className="flex items-center justify-between bg-white px-5 py-7 rounded m-4 w-[1134px] h-[95px]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left md:justify-normal gap-36 mt-20">
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
      <section className="md:px-36 mt-16 h-[777px]">
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
      <section className="px-36 pt-28 h-[742px] bg-white ">
        <div className="px-12 md:flex justify-between items-end h-[340px]">
          <div className="relative bg-secondary w-[385px] h-[128px] rounded-2xl">
            <img
              className="absolute bottom-0 right-8"
              src="../image36.png"
              alt=""
            />
          </div>

          <ul className="mr-14 mb-12">
            <h1 className="mb-8 text-5xl font-semibold">Why Choose Us?</h1>
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

        <div className="mt-12 px-12">
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
      <section className="px-36 md:h-[977px]">
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

        <div className="mt-40 px-16 md:flex justify-between items-end h-[340px]">
          <div className="">
            <img
              className="bg-primary rounded-full text-white p-1 w-12"
              src="../logo.png"
              alt="logo"
            />
            <h1 className="mt-6 text-4xl font-semibold">
              Women Health Checkup
            </h1>
            <p className="mt-4 md:w-[511px] leading-6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </p>
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
            <button className="btn-primary mt-12">Take an appointment</button>
          </div>

          <div className="relative bg-secondary w-[385px] h-[128px] mt-8 mr-8 rounded-2xl">
            <img
              className="absolute bottom-0 left-4"
              src="../image30.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
