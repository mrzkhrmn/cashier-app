import { useState } from "react";
import { Input } from "../components/Input";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loading = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-[#532B2B] min-h-screen  w-screen flex min-w-[30rem] px-0 xl:px-32">
      <div className="flex flex-1 rounded-[2rem] overflow-hidden relative">
        <div className="bg-white flex-[2_2_0] flex items-center justify-center ">
          <div className="flex flex-col shadow-2xl w-full  max-w-xl p-12 rounded-xl">
            <h2 className="text-3xl font-semibold text-[#F47458] mb-10">
              Welcome Back!
            </h2>
            <p className="text-gray-400 mb-8">Let&apos;s make some work!</p>
            <h2 className="text-5xl font-semibold mb-10">Log in</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <Input
                  label={"Email"}
                  onChange={(e) => handleChange(e)}
                  value={formData.email}
                  type="email"
                  placeholder={"Your email here..."}
                  id={"email"}
                  style="rounded-md bg-[#FFF6F4] outline-none"
                />
              </div>
              <div className="flex flex-col">
                <Input
                  label={"Password"}
                  onChange={(e) => handleChange(e)}
                  value={formData.password}
                  type="password"
                  placeholder={"Your password here..."}
                  id={"password"}
                  style="rounded-md bg-[#FFF6F4] outline-none"
                />
              </div>
              <button
                disabled={loading}
                className="bg-[#F47458] text-lg hover:bg-[#d9684f] transition duration-200 text-white py-2 disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#ffdac2]  xl:block hidden flex-[1_1_0]"></div>
        <div className="xl:block hidden absolute w-[650px] left-[55%] top-[15%]">
          <img src="./login.png" alt="singup image" />
        </div>
      </div>
    </div>
  );
};
