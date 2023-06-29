import { useForm } from "react-hook-form";
import usePortfolioContext from "../../Hooks/usePortfolioContext";
import contact from "../../assets/common/undraw_message_sent_re_q2kl.svg";
import { Toaster, toast } from "react-hot-toast";
const Contact = () => {
  const { isDark } = usePortfolioContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Thanks for sending message.");
          reset();
        }
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
  return (
    <div className="cs-container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
        <div>
          <img src={contact} alt="send message" />
        </div>
        <div
          className={`bg-base-200/20 backdrop-blur-[10px] p-3 md:p-10 ring-1 ${
            isDark ? "ring-slate-900" : "ring-slate-300"
          } rounded-lg mt-20`}
        >
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full font-inter">
              <label className="label">
                <span className="label-text">Enter your email.</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                name="email"
                className={`input input-bordered w-full ring-1 ${
                  isDark ? "ring-slate-900 " : "ring-slate-300"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p
                  role="alert"
                  className="mt-2 font-bold font-inter text-red-600"
                >
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control w-full font-inter">
              <label className="label">
                <span className="label-text">Enter your subject.</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="subject"
                className={`input input-bordered w-full ring-1 ${
                  isDark ? "ring-slate-900 " : "ring-slate-300"
                }`}
                {...register("subject", { required: true })}
              />
              {errors.subject?.type === "required" && (
                <p
                  role="alert"
                  className="mt-2 font-bold font-inter text-red-600"
                >
                  Subject is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter your message</span>
              </label>
              <textarea
                className={`textarea textarea-bordered h-24 ring-1 ${
                  isDark ? "ring-slate-900 " : "ring-slate-300"
                }`}
                placeholder="Your message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message?.type === "required" && (
                <p
                  role="alert"
                  className="mt-2 font-bold font-inter text-red-600"
                >
                  Message is required
                </p>
              )}
            </div>
            <input
              type="submit"
              value="Send"
              className="px-6 py-2 ring-2 rounded-full font-inter ring-slate-500 shadow-xl ml-5 hover:bg-[hsla(0,0%,100%,.06)] transition-all"
            />
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
