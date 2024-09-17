import React, { useEffect, useState } from 'react'
import AdSidenav from './Adsidenav';
import Topnav from '../components/Topnav';

const AdminDash = () => {
  const [tuser, setTuser] = useState(0)
  const [tquery, setTquery] = useState(0)
  const [tpenquery, setTpenquery] = useState(0)
  const [tproquery, setTproquery] = useState(0)
  const [tcomquery, setTcomquery] = useState(0)
  const total = async () => {
    const uresponse = await fetch(`http://localhost:8000/viewalluser`)
    const ures = await uresponse.json();
    setTuser(ures.userData.length)
    const qresponse = await fetch(`http://localhost:8000/totalquery`)
    const qres = await qresponse.json();
    setTquery(qres.result.length)
    const presponse = await fetch(`http://localhost:8000/allpendingquery`)
    const pres = await presponse.json();
    setTpenquery(pres.result.length || 0)
    const proresponse = await fetch(`http://localhost:8000/allprocessingquery`)
    const prores = await proresponse.json();
    setTproquery(prores.result.length || 0)
    const cresponse = await fetch(`http://localhost:8000/allcompletedquery`)
    const cres = await cresponse.json();
    setTcomquery(cres.result.length || 0)
  }
  useEffect(() => {
    total();
  }, [])

  return (
    <>
      <div className="row vh-10">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-90">
        <div className="col-2 scroll h-100 bg-danger">
          <AdSidenav />
        </div>
        <div className="col-10 scroll h-100 bg-success bg4">
          <div className="row mt-5 h-100">
            <div className="col-md-11 mx-auto p-5">
              <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                <div className="col mx-auto">
                  <div className="card h-100 blur1 text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Users</h5>
                      <p className="card-text">{tuser}</p>
                    </div>
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="card h-100 blur2 text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Queries</h5>
                      <p className="card-text">{tquery}</p>
                    </div>
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="card h-100 blur3 text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Pending Queries</h5>
                      <p className="card-text">{tpenquery}</p>
                    </div>
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="card h-100 text-light blur4">
                    <div className="card-body">
                      <h5 className="card-title">Total Processing Queries</h5>
                      <p className="card-text">{tproquery}</p>
                    </div>
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="card h-100 blur5 text-light">
                    <div className="card-body">
                      <h5 className="card-title">Total Completed Queries</h5>
                      <p className="card-text">{tcomquery}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDash