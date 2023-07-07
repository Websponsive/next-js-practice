import Card from "./Card"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="profile">
        <h1 className="dark xxl">{name} Profile</h1>
        <p className="paragraph dark-gray">{desc}</p>
        <div className="posts">
            {data.map((post) => (
                <Card
                    key={post._id}
                    post={post}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                />
            ))}
        </div>
    </section>
  )
}

export default Profile