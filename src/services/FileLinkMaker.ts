import axios from "axios";

class FileLinkMaker {
  static async makeLink(file: File) {
    return axios
      .get(URL.createObjectURL(file), {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", "compressed_" + file.name); //or any other extension
        document.body.appendChild(link);

        return Promise.resolve(link);
      })
      .catch((exception) => {
        alert("파일 다운로드 실패");
        return Promise.reject(exception);
      });
  }
}

export default FileLinkMaker;
