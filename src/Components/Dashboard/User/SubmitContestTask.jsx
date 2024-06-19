import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import { postSubmissionDetails } from "../../../Api/contestApi";
import { toast } from "react-hot-toast";

const SubmitContestTask = () => {
  const contestTaskDetails = useLoaderData();
  const { user } = UseAuth();
  const navigate = useNavigate();
  console.log(contestTaskDetails);

  const contestId = contestTaskDetails.contest._id;

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userTask = form.task.value;

    const submissionDetails = {
      name: user?.displayName,
      email: user?.email,
      photo: contestTaskDetails?.photo,
      date: new Date(),
      contestName: contestTaskDetails?.contest?.contestName,
      userTask,
    };

    // console.log(submissionDetails);

    try {
      const data = await postSubmissionDetails(contestId, submissionDetails);
      console.log(data);
      toast.success("Task Submitted successfully");
      navigate("/dashboard/myParticipatedContest");
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Submit Contest Task
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={user?.displayName || ""}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={user?.email || ""}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="task" className="sr-only">
                Task Link
              </label>
              <input
                id="task"
                name="task"
                type="url"
                autoComplete="task"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Paste Drive Link Task"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitContestTask;
