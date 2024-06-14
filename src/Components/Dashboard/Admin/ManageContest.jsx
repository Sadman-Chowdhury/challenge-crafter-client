import { FaDeleteLeft } from "react-icons/fa6";
import Container from "../../../Container";
import UseAllContest from "../../../Hooks/UseAllContest";
import { MdOutlineComment } from "react-icons/md";

const ManageContest = () => {
  const [allContests, refetch] = UseAllContest();
  console.log(allContests);
  return (
    <div>
      <h1 className="mb-24 text-white">manage user</h1>
      <Container>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
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
              {/* row 1 */}
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
                    <button className="text-4xl text-green-500">
                      <MdOutlineComment />
                    </button>
                  </td>
                  <td>
                    <button className="px-2 py-1 bg-cyan-600 font-bold text-white rounded-2xl">
                      Confirm
                    </button>
                  </td>
                  <td>
                    <button
                    // onClick={() => handleDeleteContest(item._id)}
                    >
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
    </div>
  );
};

export default ManageContest;
