import { FaDeleteLeft } from "react-icons/fa6";
import Container from "../../../Container";
import UseAllContest from "../../../Hooks/UseAllContest";
import { MdOutlineComment } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteContest } from "../../../Api/contestApi";
import axiosSecure from "../../../Api";
import toast from "react-hot-toast";
import { useState } from "react";
import CommentModal from "./CommentModal"; // Adjust the import path if necessary

const ManageContest = () => {
  const [allContests, refetch] = UseAllContest();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);

  const handleOpenModal = (contest) => {
    setSelectedContest(contest);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDeleteContest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContest(id).then((res) => {
          if (res.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Contest has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleConfirmContest = (id) => {
    axiosSecure.patch(`/allContest/accepted/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Confirmed successfully");
        refetch();
      }
    });
  };

  return (
    <div>
      <h1 className="mb-24 text-white">Manage Contest</h1>
      <Container>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className="text-black">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>Contest Type</th>
                <th>Contest Img</th>
                <th>Contest Details</th>
                <th>Comment</th>
                <th>Confirm</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allContests.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.contestCreator?.name}</td>
                  <td>{item?.contestCreator?.email}</td>
                  <td>
                    <img
                      src={item?.contestCreator?.image}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>
                  <td>
                    <h1 className="bg-orange-600 px-1 text-center text-white font-bold py-1 rounded-2xl">
                      {item?.contestType}
                    </h1>
                  </td>
                  <td>
                    <img
                      src={item?.image}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>
                  <td>
                    <button className="px-2 py-1 bg-cyan-600 font-bold text-white rounded-2xl">
                      Details
                    </button>
                  </td>
                  <td>
                    <button
                      className="text-4xl text-green-500"
                      onClick={() => handleOpenModal(item)}
                    >
                      <MdOutlineComment />
                    </button>
                  </td>
                  <td>
                    {item?.status === "accepted" ? (
                      <button
                        disabled
                        className="px-2 py-1 bg-green-400 font-bold text-white rounded-2xl"
                      >
                        Accepted
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConfirmContest(item?._id)}
                        className="px-2 py-1 bg-cyan-600 font-bold text-white rounded-2xl"
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteContest(item._id)}>
                      <span className="text-2xl text-red-600 hover:text-orange-500">
                        <FaDeleteLeft />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      {selectedContest && (
        <CommentModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          contest={selectedContest}
        />
      )}
    </div>
  );
};

export default ManageContest;
