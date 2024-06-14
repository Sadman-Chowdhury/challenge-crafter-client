import Swal from "sweetalert2";
import Container from "../../../../Container";
import UseToGetContestCreatedByEmail from "../../../../Hooks/UseToGetContestCreatedByEmail";
import { MdOutlineComment } from "react-icons/md";
import { deleteContest } from "../../../../Api/contestApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommentOfAdminModal from "./CommentOfAdminModal";

const MyCreatedContest = () => {
  const [contests, refetch] = UseToGetContestCreatedByEmail();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);

  const handleOpenModal = (contest) => {
    setSelectedContest(contest);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  console.log(contests);

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
          console.log(res);
          if (res.deletedCount > 0) {
            // console.log(res);
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
  return (
    <div>
      <h1 className="mb-24 text-white">my Contest</h1>
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Contest Name</th>
                <th>Img</th>
                <th>Status</th>
                <th>Admin Comment</th>
                <th>Submission</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {contests.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="font-bold">{item?.contestName}</td>
                  <td>
                    <img
                      src={item?.image}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>

                  <td>
                    <span className="bg-orange-400 px-2 py-1 rounded-2xl text-white font-bold">
                      {item?.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-4xl text-green-500"
                    >
                      <MdOutlineComment />
                    </button>
                  </td>
                  <td>
                    <button className="bg-cyan-600 px-2 py-1 rounded-2xl text-white font-bold">
                      Submission
                    </button>
                  </td>

                  <td>
                    {item?.status === "accepted" ? (
                      <button
                        disabled
                        className="bg-green-600 px-2 py-1 rounded-2xl text-white font-bold"
                      >
                        Edit
                      </button>
                    ) : (
                      <Link
                        to={`/dashboard/editMyCreated-contest/${item?._id}`}
                      >
                        <button className="bg-green-600 px-2 py-1 rounded-2xl text-white font-bold">
                          Edit
                        </button>
                      </Link>
                    )}
                  </td>
                  <td>
                    {item?.status === "accepted" ? (
                      <button
                        disabled
                        className="bg-red-600 px-2 py-1 rounded-2xl text-white font-bold"
                      >
                        Delete
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeleteContest(item?._id)}
                        className="bg-red-600 px-2 py-1 rounded-2xl text-white font-bold"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      {selectedContest && (
        <CommentOfAdminModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          contest={selectedContest}
        />
      )}
    </div>
  );
};

export default MyCreatedContest;
