const TableEntry = ({
	id, firstName, lastName, age, gender, email, phone, username, birthDate, height, weight, address , bank, company 
}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{age}</td>
			<td>{gender}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>{username}</td>
			<td>{birthDate}</td>
			<td>{height}</td>
			<td>{weight}</td>
			<td>{address.city}</td>
			<td>{address.coordinates.lat}, {address.coordinates.lng}</td>
			<td>{bank.cardExpire}</td>
			<td>{company.name}</td>
		</tr>
	)
}

export default TableEntry;