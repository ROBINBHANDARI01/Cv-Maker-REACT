import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LogIn, Eye, EyeOff, CircleUser } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // await authService.login(form.email, form.password)
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden h-screen w-full bg-[url('C:\Users\acer\Documents\codes\web_dev\projects\Cv-Maker-REACT\src\assets\wave_background.svg')] bg-cover  bg-center">
     

      {/* Dot grid */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-60">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="1.4" fill="rgba(99,122,210,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-around md:px-8 py-4">
        <div className="flex items-center gap-1">
                <img
                  src={logo}
                  alt="logo"
                  className="h-6 md:h-8"
                ></img>
                <span className="text-sm hidden sm:block text-white/95 font-medium">MakeMyResume</span>
              </div>

        <Link to="/" className="text-sm text-white/85 hover:text-white transition-colors">
          ← Back to home
        </Link>
      </nav>

      {/* Card */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pb-20 mt-10">
        <div className="w-full max-w-md  bg-[rgba(15,30,90,0.55)]  border  border-white/20
          rounded-2xl p-9 shadow-2xl shadow-blue-400/40">

          <div className="flex flex-col items-center mb-7">
            <div className="w-12 h-12 bg-blue-500/85 rounded-xl flex items-center justify-center mb-4">
              <CircleUser className="w-9 h-9  text-white" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Welcome back</h1>
            <p className="text-sm opacity-80 text-center text-blue-200/80 mt-1">Sign in to continue building your resume</p>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl
              text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              
              <div className="relative">
               
                <input
                  type="email"
                  required
                  placeholder="✉     Email address" you
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full placeholder:text-[1rem] pl-10 pr-4 py-2.5 text-xs border text-white border-slate-200 rounded-xl bg-white/10
                    focus:outline-none  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                    placeholder:text-slate-300 transition-all "
                />
              </div>
            </div>

            {/* Password */}
            <div>
            
              <div className="relative">
              
                <input
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="🔒︎     Password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="w-full pl-10 placeholder:text-[1rem]  text-xs pr-10 py-2.5 text-white border border-slate-200 rounded-xl bg-white/10
                    focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                    placeholder:text-slate-300 transition-all"
                />
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                    hover:text-slate-200 transition-colors">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-blue-200/55 cursor-pointer">
                <input type="checkbox" checked={form.remember}
                  onChange={e => setForm(f => ({ ...f, remember: e.target.checked }))}
                  className="accent-blue-600 w-3.5 h-3.5 cursor-pointer" />
                Remember me
              </label>
              <Link to="/forgot-password"
                className="text-xs text-blue-600 font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            <button type="submit" disabled={loading}
              className=" flex justify-center gap-1 w-full py-3 bg-blue-600 hover:opacity-90 active:scale-[0.98]
                text-white font-semibold rounded-xl text-sm transition-all
                disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Signing in..." : "Sign in "}<LogIn className="h-5 "/>
            </button>
          </form>

          <div className="flex items-center gap-3 my-5 text-xs text-slate-400">
            <div className="flex-1 h-px bg-slate-200" />
            or
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          

          <p className="text-center text-xs text-blue-200/50 mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}