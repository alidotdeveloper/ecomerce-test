import image from "../images/Image.png";
import { Formik, FormikHelpers, Field } from "formik";

interface MyFormValues {
  email: string;
  password: string;
}

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
              <div className="lg:max-w-3xl lg:w-full md:w-3/5 w-6/7 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={image}
                />
              </div>
              <div className="lg:flex-grow md:w-2/5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-medium font-sans leading-tight tracking-tight text-black md:text-4xl">
                      Log in to Exclusive
                    </h1>
                    <p className="text-sm leading-tight tracking-tight text-black md:text-xl">
                      Enter your details below
                    </p>

                    <form
                      className="space-y-4 md:space-y-6 font-sans"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="border-b-2 border-gray-300 text-black block w-full p-2.5 dark:border-gray dark:text-black"
                          placeholder="Email or Phone Number"
                        />
                      </div>
                      <div>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder="enter password"
                          className="border-b-2 border-gray-300 text-gray-900 block w-full p-2.5 dark:border-gray dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="flex items-center flex-col md:flex-row justify-between">
                        <div className="flex items-start">
                          <div className="ml-3 text-sm mb-2 mx-4">
                            <button
                              type="submit"
                              className="w-full text-white bg-[#DB4444] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-9 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                            >
                              Log in
                            </button>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary-600 text-[#DB4444] hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Login;