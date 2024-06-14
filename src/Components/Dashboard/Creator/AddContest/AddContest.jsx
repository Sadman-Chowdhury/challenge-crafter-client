import { useState } from "react";
import { imageUpload } from "../../../../Api/utils";
import Container from "../../../../Container";
import UseAuth from "../../../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImSpinner3 } from "react-icons/im";
import toast from "react-hot-toast";
import { addContest } from "../../../../Api/contestApi";

const AddContest = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const contestTypes = [
    { id: 1, label: "Image Design" },
    { id: 2, label: "Article Writing" },
    { id: 3, label: "Marketing Strategy" },
    { id: 4, label: "Digital advertisement" },
    { id: 5, label: "Gaming Review" },
    { id: 6, label: "Book Review" },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleImageChange = (file) => {
    setUploadButtonText(file.name);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const contestName = form.contestName.value;
    const image = form.image.files[0];
    const contestType = form.contestType.value;
    const contestPrice = form.price.value;
    const contestPrize = form.prize.value;
    const description = form.description.value;
    const taskSubmissionText = form.taskToSubmit.value;

    const contestCreator = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const image_url = await imageUpload(image);

    const contestData = {
      contestName,
      contestType,
      startDate,
      endDate,
      contestPrice,
      contestPrize,
      description,
      taskSubmissionText,
      participantsCount: 0,
      status: "pending",
      comment: "",
      image: image_url?.data?.display_url,
      contestCreator,
    };

    console.log(contestData);
    try {
      const data = await addContest(contestData);
      console.log(data);
      setUploadButtonText("Uploaded!");
      toast.success("Contest Added!");
      navigate("/dashboard/myCreated-contest");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-24 text-white">Add Contest</h1>
      <Container>
        <div className="text-center mb-8 text-cyan-600 font-bold text-3xl">
          Add Contest
        </div>
        <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="contestName" className="block text-gray-600">
                    Contest Name
                  </label>
                  <input
                    className="lg:w-[350px] px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="contestName"
                    id="contestName"
                    type="text"
                    placeholder="Contest Name"
                    required
                  />
                </div>
                <div className="p-4 bg-white w-full m-auto rounded-lg">
                  <div className="file_upload px-5 py-3 relative border-2 border-gray-300 rounded-lg">
                    <div className="flex flex-col w-max mx-auto text-center">
                      <label>
                        <input
                          onChange={(e) => handleImageChange(e.target.files[0])}
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                        />
                        <div className="bg-cyan-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-cyan-500">
                          {uploadButtonText}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="contestType" className="block text-gray-600">
                    Contest Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="contestType"
                    id="contestType"
                  >
                    {contestTypes.map((type) => (
                      <option value={type.label} key={type.id}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="startDate" className="block text-gray-600">
                    Start Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="startDate"
                    id="startDate"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="endDate" className="block text-gray-600">
                    End Date
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="endDate"
                    id="endDate"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="price" className="block text-gray-600">
                    Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="price"
                    id="price"
                    type="number"
                    placeholder="Price"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="prize" className="block text-gray-600">
                    Prize
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="prize"
                    id="prize"
                    type="number"
                    placeholder="Prize"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="taskToSubmit" className="block text-gray-600">
                    Task to Submit
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md"
                    name="taskToSubmit"
                    id="taskToSubmit"
                    type="text"
                    placeholder="Task to Submit"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="description" className="block text-gray-600">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="block rounded-md focus:cyan-300 w-full h-32 px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500"
                    name="description"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500"
            >
              {loading ? (
                <ImSpinner3 className="m-auto animate-spin" size={24} />
              ) : (
                "Add Contest"
              )}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddContest;
