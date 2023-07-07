import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {

    const imageSubmit = () => {
        let url = prompt('Enter image url');
        setPost({
            ...post,
            image: url
        })
    } 
  return (
    <>
        <h1 className="dark header">{type} Post</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="title" className="small-text dark">Title</label>
                <input 
                    type="text" 
                    className="dark small-text" 
                    placeholder="Audi A7"
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    required
                    name="title"
                />
            </div>
            <div className="input-group">
                <label htmlFor="description" className="small-text dark">Description</label>
                <textarea 
                    type="text" 
                    className="dark small-text" 
                    placeholder="Talk about condition, documentation, etc"
                    value={post.description}
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    required
                    name="description"
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="make" className="small-text dark">Make</label>
                <input 
                    type="text" 
                    className="dark small-text" 
                    placeholder="Audi"
                    value={post.make}
                    onChange={(e) => setPost({...post, make: e.target.value})}
                    required
                    name="make"
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="Model" className="small-text dark">Model</label>
                <input 
                    type="text" 
                    className="dark small-text" 
                    placeholder="A7"
                    value={post.model}
                    onChange={(e) => setPost({...post, model: e.target.value})}
                    required
                    name="Model"
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="Year" className="small-text dark">Year</label>
                <input 
                    type="number" 
                    className="dark small-text" 
                    placeholder="2016"
                    value={post.year}
                    onChange={(e) => setPost({...post, year: e.target.value})}
                    required
                    name="year"
                    min={1950}
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="price" className="small-text dark">Price</label>
                <input 
                    type="number" 
                    className="dark small-text" 
                    placeholder="$50000"
                    value={post.price}
                    onChange={(e) => setPost({...post, price: e.target.value})}
                    required
                    name="price"
                    min={1}
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="km" className="small-text dark">Km</label>
                <input 
                    type="number" 
                    className="dark small-text" 
                    placeholder="105000"
                    value={post.km}
                    onChange={(e) => setPost({...post, km: e.target.value})}
                    required
                    name="km"
                    min={0}
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="displacement" className="small-text dark">Displacement</label>
                <input 
                    type="number" 
                    className="dark small-text" 
                    placeholder="3000cm3"
                    value={post.displacement}
                    onChange={(e) => setPost({...post, displacement: e.target.value})}
                    required
                    name="displacement"
                    min={0}
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="hp" className="small-text dark">Horsepower</label>
                <input 
                    type="number" 
                    className="dark small-text" 
                    placeholder="350"
                    value={post.hp}
                    onChange={(e) => setPost({...post, hp: e.target.value})}
                    required
                    name="hp"
                    min={1}
                />
            </div>
            <div className="input-group small-input">
                <label htmlFor="color" className="small-text dark">Color</label>
                <input 
                    type="text" 
                    className="dark small-text" 
                    placeholder="White"
                    value={post.color}
                    onChange={(e) => setPost({...post, color: e.target.value})}
                    required
                    name="color"
                />
            </div>
            <button
                disabled={submitting}
                className="outline-btn small-text dark "
                onClick={imageSubmit}
            >
                Submit Image
            </button>
            <button
                type="submit"
                disabled={submitting}
                className="accent-btn small-text light"
            >
                {submitting ? "Submitting..." : type}
            </button>
        </form>
    </>
  )
}

export default Form