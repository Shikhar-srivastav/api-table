import { useState, useEffect } from 'react';
import axios from 'axios';
import TableEntry from "./TableEntry";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getApiData = async () => {
			const raw = await axios.get('https://dummyjson.com/users');
			setUsers(raw.data.users);
		}
		
		getApiData();
	}, []);

  return (
    <table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th rowSpan={2}>ID</th>
					<th rowSpan={2}>First Name</th>
					<th rowSpan={2}>Last Name</th>
					<th rowSpan={2}>Age</th>
					<th rowSpan={2}>Gender</th>
					<th rowSpan={2}>Email</th>
					<th rowSpan={2}>Phone</th>
					<th rowSpan={2}>Username</th>
					<th rowSpan={2}>DOB</th>
					<th rowSpan={2}>Height</th>
					<th rowSpan={2}>Weight</th>
					<th colSpan={2}>Location</th>
					<th rowSpan={2}>Card Exp</th>
					<th rowSpan={2}>Company</th>
				</tr>
				<tr>
					<th>City</th>
					<th>Coordinates</th>
				</tr>
			</thead>
			<tbody>
				{ users.map(user => <TableEntry key={users.id} { ...user } />) }
			</tbody>
		</table>
  );
}

export default App;
