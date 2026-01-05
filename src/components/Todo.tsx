import { useTodos, useTodosId } from "../services/queries";

export default function Todo() {
    const todosIdsQuery = useTodosId();
    const todosQueries = useTodos(todosIdsQuery.data);

    // if (todosIdsQuery.isPending) {
    //     return <span>Loading....</span>
    // }

    // if(todosIdsQuery.isError) {
    //     return <span> There is an error!</span>
    // }

    return (
        <div>
            <div>
                <p>Query data status: {todosIdsQuery.status}</p>
                {todosIdsQuery.data?.map((id) => (
                    <p key={id}> id: {id}</p>
                ))}
            </div>

            <ul>
                {todosQueries.map(({ data }) => (
                    <li key={data?.id}>
                        <div> Id: {data?.id}</div>
                        <span>
                            <strong> Title:</strong> {data?.title}, {" "}
                            <strong> Description: </strong> {data?.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}