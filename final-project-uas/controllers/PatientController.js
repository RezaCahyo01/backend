// import Model Patient //
const Patient = require("../models/Patient.js");

class PatientController {
  async index(req, res) {
    // Memanggil method all dari Model Patient //
    const patients = await Patient.all();

    if (patients.length > 0) {
      const data = {
        message: "Menampilkkan semua patients",
        data: patients,
      };
      return res.status(200).json(data);
    }
    const data = {
      message: "Patients kosong",
    };
    return res.status(200).json(data);
  }

  async store(req, res) {
    const {
      name,
      phone,
      address,
      status,
      in_date_at,
      out_date_at
    } = req.body;
    if (!name || !phone || !address || !status || !in_date_at | !out_date_at) {
      const data = {
        message: "Data harus dikirim",
      };
      return res.status(422).json(data);
    }

    const patient = await Patient.create(req.body);
    const data = {
      message: "Menambahkan data patient",
      data: patient,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    const {
      id
    } = req.params;
    const patient = await Patient.find(id);
    if (patient) {
      const patient = await Patient.update(id, req.body);
      const data = {
        message: `Mengedit data patient`,
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: `Data Patient tidak ada`,
    };

    return res.status(404).json(data);
  }
  async destroy(req, res) {
    const {
      id
    } = req.params;
    const patient = await Patient.find(id);
    if (patient) {
      await Patient.delete(id);
      const data = {
        message: `Menghapus data patient`,
      };

      return res.status(200).json(data);
    }
    const data = {
      message: `Data Patient tidak ada`,
    };

    return res.status(404).json(data);
  }

  async show(req, res) {
    const {
      id
    } = req.params;
    const patient = await Patient.find(id);
    if (patient) {
      const data = {
        message: `Menampilkan detail patient`,
        data: patient,
      };

      return res.status(200).json(data);
    }
    const data = {
      message: `Data Patient tidak ada`,
    };

    res.status(404).json(data);
  }
  async search(req, res) {
    const names = "%" + req.params.name + "%";
    const patients = await Patient.search(names);
    if (patients == 0) {
      const data = {
        message: 'Data Resource tidak ada',
      };
      res.status(404).json(data);
    } else {
      const data = {
        message: 'Mencari data Resource',
        data: patients,
      };
      res.status(200).json(data);
    }
  }

  async positive(req, res) {
    const status = "positive";
    const patients = await Patient.find(status);
    if (patients == 0) {
      const data = {
        message: 'Data Positve tidak ada',
      };
      res.status(404).json(data);
    } else {
      const data = {
        message: 'Menambahkan data Postive',
        data: patients,
      };
      res.status(200).json(data);
    }
  }
  async recovered(req, res) {
    const status = "recovered";
    const patients = await Patient.find(status);
    if (patients == 0) {
      const data = {
        message: 'Data Recovered tidak ada',
      };
      res.status(404).json(data);
    } else {
      const data = {
        message: 'Menambahkan data Recovered',
        data: patients,
      };
      res.status(200).json(data);
    }
  }

  async dead(req, res) {
    const status = "dead";
    const patients = await Patient.find(status);
    if (patients == 0) {
      const data = {
        message: 'Data Dead tidak ada',
      };
      res.status(404).json(data);
    } else {
      const data = {
        message: 'Menambahkan data Dead',
        data: patients,
      };
      res.status(200).json(data);
    }
  }
}

const object = new PatientController();

module.exports = object;