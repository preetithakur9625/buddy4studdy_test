import { useEffect, useState } from 'react';
import { Container, Spinner, Table as Btable } from 'react-bootstrap';

const columns = ["S.No.", "Country_code", "Country", "Domains", "Name", "State_province", "Web-pages"]

const Table = () => {

    const [tableData, setTableData] = useState([]);
    const [showSpinner, setshowSpinner] = useState(true);

    useEffect(() => {
        setTableData(true);
        fetch("http://universities.hipolabs.com/search?country=India")
            .then((Response) => Response.json())
            .then((data) => {
                setTableData(data);
                console.log(data[378])
            })
            .catch((error) => {
                console.warn(error);
            }).finally(() => {
                setshowSpinner(false)
            });
    }, []);

    return (
        <Container>
            <h1 className='text-center my-5'>Buddy4Study test</h1>
            <Btable striped bordered hover responsive size="sm" className='table'>
                <thead>
                    <tr>
                        {columns.map((column, index) => { return <th class="header bg-dark text-white" scope="col" key={index}>{column}</th> })}
                    </tr>
                </thead>
                <tbody>
                    {showSpinner ?
                        <div className="position-absolute justify-content-center align-self-center" style={{ top: "50%", left: "50%" }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                        :
                        tableData.map((rowData, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{rowData.alpha_two_code}</td>
                                    <td>{rowData.country}</td>
                                    <td>{rowData.domains.map((domain) => { return (domain + " ") })}</td>
                                    <td>{rowData.name}</td>
                                    <td>{rowData["state-province"]}</td>
                                    <td>{rowData.web_pages.map((web_page) => { return (web_page + " ") })}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Btable>
        </Container >
    )
}

export default Table;



