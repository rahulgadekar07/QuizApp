import React from 'react'

export default function ResultTable() {
  return (
    <div>
      <div className="table-responsive  ">
          <table className="table table-dark table-dark11 table-striped ">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Attempts</th>
                <th scope="col">Earned Marks</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">John Doe</th>
                <td>02</td>
                <td>50</td>
                <td>Pass</td>
              </tr>
              
            </tbody>
          </table>
        </div>
    </div>
  )
}
