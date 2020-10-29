axios.get(`http://localhost:3000/getallstaff`)
    .then(result => {
        let staffinfo = document.getElementById('staffinfo');

        for (let i = 0; i < result.data.length; i++) {
            staffinfo.innerHTML += `
            <div class="accordion mt-4" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne${i}" aria-expanded="true" aria-controls="collapseOne">
                            ${result.data[i].name.toUpperCase()}
                        </button>
                    </h2>
                </div>

            <div id="collapseOne${i}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                    <strong>Full name:</strong> ${result.data[i].data.fullname}<br>
                    <strong>Age:</strong> ${result.data[i].data.age}<br>
                    <strong>Company Email:</strong> ${result.data[i].data.company_email}<br>
                    <strong>date joined:</strong> ${result.data[i].data.date_joined}<br>
                    <strong>Designation:</strong> ${result.data[i].data.designation}<br>
                    <strong>Employee id:</strong> ${result.data[i].data.emp_id}<br>
                    <strong>Expiration:</strong> ${result.data[i].data.pass_expiry}<br>
                    <strong>RR Pass:</strong> ${result.data[i].data.rr_pass}<br>
                    <strong>Team:</strong> ${result.data[i].data.team}<br><br>
                    <button onclick="editForm(this.getAttribute('data-id'))" data-id="${result.data[i]._id}" class="btn btn-info btn-block text-left" type="button">
                            Edit
                        </button>
                    <button onclick="deleteForm(this.getAttribute('data-id'))" data-id="${result.data[i]._id}" class="btn btn-danger btn-block text-left" type="button" >
                            Delete
                        </button>
                </div>
            </div>
        </div>
    </div>
            `
        }
    })

function editForm(id){
    window.location.replace(`http://${window.location.href.split('/')[2]}/editform?id=${id}`);
}

function deleteForm(id){
    window.location.replace(`http://${window.location.href.split('/')[2]}/deleteform?id=${id}`)
}


