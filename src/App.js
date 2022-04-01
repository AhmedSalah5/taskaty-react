import { useState } from "react";
import AddList from "./components/AddList";
import Header from "./components/Header";
import List from "./components/List";

function App() {
	const [addListOpen, setAddListOpen] = useState(false);
	const listsData = [
		{ listId: "list1", title: "List One", items: [{ itemId: "item1", itemText: "This is item one." }] }
	]
	const [lists, setLists] = useState([...listsData]);
	return (
		<div className="App">
			<Header addListOpen={addListOpen} setAddListOpen={setAddListOpen} />
			<hr />
			<main>
				<div className="container">
					<h5 className="title">Tasks Lists</h5>
					<div className="row">
						{lists.map((list) => (
							<div className="col-md-4 col-sm-6" key={list.listId}>
								<List list={list} lists={lists} setLists={setLists} />
							</div>
						))}
					</div>
				</div>
			</main >
			<AddList addListOpen={addListOpen} lists={lists} setLists={setLists} setAddListOpen={setAddListOpen} />

		</div >
	);
}

export default App;
