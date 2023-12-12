"use client";

import { useEffect, useState } from "react";
import upload from "./upload.module.css";
import axios, { formToJSON } from "axios";

export default function Upload() {
  const [project, setProject] = useState({
    projectName: "",
    projectFile: "",
    projectLink: "",
    key: "",
  });

  const handleGetFieldData = (e) => {
    if (e.target.dataset.name === "projectFile") {
      setProject((prev) => ({
        ...prev,
        [e.target.dataset.name]: e.target.files[0],
      }));
      return;
    }

    setProject((prev) => ({
      ...prev,
      [e.target.dataset.name]: e.target.value,
    }));

    if (e.target.dataset.name === "key") {
    }
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    setProject({
      projectName: "",
      projectLink: "",
      key: "",
    });

    const formData = new FormData();
    formData.append("projectFile", project.projectFile);
    formData.append("projectName", project.projectName);
    formData.append("projectLink", project.projectLink);
    formData.append("key", project.key);

    console.log(formData);
    try {
      const resp = await axios.post("/api/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (resp.status === 200) {
        const data = resp.data;
        alert(data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    function openFile() {
      const fileField = document.getElementById("projectFile");
      fileField.click();
    }

    const file = document.getElementById("file");

    file.addEventListener("click", openFile);

    return () => {
      file.removeEventListener("click", openFile);
    };
  }, []);

  return (
    <form className={upload.form} onSubmit={handleSubmitProject}>
      <div className={upload.form__title}>Upload Project</div>

      <div className={upload.field}>
        <label htmlFor="projectName">Project Name </label>
        <input
          type="text"
          id="projectName"
          data-name="projectName"
          onChange={handleGetFieldData}
          value={project.projectName}
        />
      </div>

      <div className={upload.field} id="file">
        <label htmlFor="projectImage">Project Image </label>
        <input
          type="file"
          id="projectFile"
          data-name="projectFile"
          onChange={handleGetFieldData}
          hidden
        />
        <div className={upload.imageBox}>
          {project.projectFile
            ? project.projectFile.name
            : "Click to upload your file"}{" "}
        </div>
      </div>

      <div className={upload.field}>
        <label htmlFor="link">Link </label>
        <input
          type="text"
          id="link"
          data-name="projectLink"
          onChange={handleGetFieldData}
          value={project.projectLink}
        />
      </div>

      <div className={upload.field}>
        <label htmlFor="link">Key </label>
        <input
          type="password"
          id="key"
          data-name="key"
          onChange={handleGetFieldData}
          value={project.key}
        />
      </div>

      <button type="submit" className={upload.submitBtn}>
        <img src="/images/arrow-right.svg" alt="upload icon" />
      </button>
    </form>
  );
}
