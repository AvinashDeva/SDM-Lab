function MovieList(props) {
    return(
        <>
        <table className="table table-striped table-hover">
            <thead>
                <tr className="table-dark">
                    <th>Movie Name</th>
                    <th>Actor</th>
                    <th>Director</th>
                    <th>Movie Type</th>
                </tr>
            </thead>
    
        <tbody>
        {props.movies.map(item => 
            <tr>
                <td>{item.movieName}</td>	
                <td>{item.director}</td>
                <td>{item.actor}</td>
                <td>{item.platform}</td>
                <td>{item.movieType.join(" , ")}</td>
            </tr>
        )}
    </tbody>
</table>		
</>
)
}
export default MovieList;