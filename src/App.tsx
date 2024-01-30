import { Instagram, Mail, MapPin, Phone } from "lucide-react";

function App() {
  return (
    <div className="bg-slate-50">
      <section className="px-36 py-2 bg-primary w-full flex items-center justify-between text-white">
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

      {/* header */}
      <section className="flex justify-center">
        <div className="flex items-center justify-between bg-white px-5 py-7 rounded m-4 w-[1134px] h-[95px]">
          <div className="flex gap-2">
            <img className="object-fill" src="../logo.png" alt="logo" />
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
      <section className="px-36 py-10 flex items-center justify-between">
        <div className="relative  bg-secondary w-[497px] h-[447px] rounded-2xl">
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
        <div className="max-w-[554px]">
          <p className="text-primary line text-lg font-medium">
            Welcome to Medico Healthcare
          </p>
          <h3 className="text-7xl font-semibold mt-4">
            Your Journey to Better Health Starts Here
          </h3>
          <button className="btn-primary mt-12">Discover More</button>
        </div>
      </section>
      {/* <h1 className="text-3xl">hello world</h1> */}
      {/* <h1 className="text-3xl font-medium">hello</h1> */}
    </div>
  );
}

export default App;
