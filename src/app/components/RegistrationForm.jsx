import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleRegister = () => {
    if (username && email && password) {
      router.push("/login");
    }
  };

  return (
    <div className="relative flex flex-col justify-between items-center px-10">
      <form
        className="px-10 mb-8"
        autoComplete="off"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="block pb-2">
          <label className="block mb-1 text-left" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-80 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            {...register("username", {
              required: "Username is required.",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Username is not valid.",
              },
            })}
          />
          <small className="text-red-500 font-semibold">
            {errors.username && (
              <p className="errorMsg">{errors.username.message}</p>
            )}
          </small>
        </div>
        <div className="block pb-2">
          <label className="block mb-1 text-left" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-80 p-2 bg-gray-50 mx-auto my-2 border border-gray-300 text-gray-900 text-sm rounded-lg block"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          <small className="text-red-500 font-semibold">
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </small>
        </div>
        <div className="block pb-2">
          <label className="block mb-1 text-left" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-80 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password should be at-least 8 characters.",
              },
            })}
          />
          <small className="text-red-500 font-semibold">
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
          </small>
        </div>
        <div className="block pt-4">
          <label></label>
          <button
            className="w-80 text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
