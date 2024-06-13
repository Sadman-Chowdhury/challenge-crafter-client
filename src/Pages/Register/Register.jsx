import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { imageUpload } from "../../Api/utils";
import toast from "react-hot-toast";
import Container from "../../Container";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import UseAuth from "../../Hooks/UseAuth";
import { saveUser } from "../../Api/auth";

const Register = () => {
  // ----------------------------------------------------------------

  // -------------------------Sign Up functionalities---------------------------------------
  const [uploadButtonText, setUploadButtonText] = useState(
    "Upload Profile Picture"
  );

  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    gitHubSign,
    loading,
  } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      // uploading img to imgBB

      const imageData = await imageUpload(image);

      // user registration
      const result = await createUser(email, password);

      // save username and profile photo
      await updateUserProfile(name, imageData?.data?.display_url);

      // save user data in database
      const dbResponse = await saveUser(result?.user);

      navigate(from, { replace: true });

      setUploadButtonText("Upload Profile Picture");
      toast.success("SignUp Successful");
      // ----------------------------------------------------------------
    } catch (err) {
      // console.log(err);
      toast.error(err?.message);
    }
  };

  //---------------- handle Google Sign In --------------------
  const handleGoogleSignIn = async () => {
    try {
      // user registration with google
      const result = await signInWithGoogle();

      // save user data in database
      const dbResponse = await saveUser(result?.user);

      navigate(from, { replace: true });
      toast.success("SignUp Successful");
      // ----------------------------------------------------------------
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  const handleGitHubLogin = async () => {
    try {
      // user registration with google
      const result = await gitHubSign();

      // save user data in database
      const dbResponse = await saveUser(result?.user);

      navigate(from, { replace: true });
      toast.success("SignUp Successful");
      // ----------------------------------------------------------------
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // ----------------------------------------------------------------
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  // ----------------------------------------------------------------
  return (
    <>
      <Container>
        <div className="flex items-center justify-center gap-12">
          {/* for Signup */}
          <div className="">
            <div className="flex justify-center items-center min-h-screen shadow-2xl">
              <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900 ">
                <div className="mb-8">
                  <h1 className="my-3 text-4xl font-bold bg-gradient-to-br from-slate-600 to-green-300 text-transparent bg-clip-text">
                    Sign Up
                  </h1>
                  <p className="text-sm text-gray-400">
                    Welcome to Challenge Crafter
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name Here"
                        className="lg:w-[400px] px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter Your Email Here"
                        className="lg:w-[400px] px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm mb-2">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        id="password"
                        required
                        placeholder="*******"
                        className="lg:w-[400px]  px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className=" bg-white w-full  m-auto rounded-lg">
                    <div className="px-5 py-3 relative border-2 border-black rounded-lg">
                      <div className="flex flex-col w-max mx-auto text-center ">
                        <label>
                          <input
                            onChange={(e) =>
                              handleImageChange(e.target.files[0])
                            }
                            className="text-sm cursor-pointer w-36  hidden"
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            hidden
                          />
                          <div className="bg-cyan-600 hover:animate-pulse text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-cyan-700">
                            {uploadButtonText}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <p className="px-3 text-sm dark:text-gray-400">
                    SignUp with social accounts
                  </p>
                  <div
                    onClick={handleGoogleSignIn}
                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white"
                  >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                  </div>
                  <div
                    onClick={handleGitHubLogin}
                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white"
                  >
                    <FaGithub size={32} />

                    <p>Continue with GitHub</p>
                  </div>
                  <p className="px-6 text-sm text-center text-gray-400">
                    Already have an account?
                    <Link
                      to="/login"
                      className="hover:underline hover:text-purple-500 text-gray-600"
                    >
                      Login
                    </Link>
                  </p>
                  <div>
                    {loading ? (
                      <button
                        type="submit"
                        className="bg-purple-800 lg:w-[400px] rounded-md py-3 text-white flex items-center justify-center"
                      >
                        <ImSpinner9 className="animate-spin" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-cyan-600 font-bold lg:w-[400px] rounded-md py-3 text-white hover:bg-cyan-700"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
                {/* ....................... */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
