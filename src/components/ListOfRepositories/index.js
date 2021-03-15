import Repository from "../Repository";

function ListOfRepositories({ repositories }) {
  const filteredRepositories = repositories.filter((item) => {
    return item.fork !== true;
  });
  return (
    <div className="grid grid-cols-1justify-items-center gap-10 md:grid-cols-3 md:px-56 py-10">
      {filteredRepositories.map((item, index) => (
        <Repository repository={item} key={index} />
      ))}
    </div>
  );
}

export default ListOfRepositories;
