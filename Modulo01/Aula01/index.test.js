import { constants } from './src/constants.js';
import File from './src/file.js';
import { rejects, deepStrictEqual } from 'assert';
const { error } = constants;

; (async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  };
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  };
  {
    const filePath = './mocks/threeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "name": "Erick Wendel",
        "id": 1,
        "profession": "Javascript Instructor",
        "birthDay": new Date().getFullYear() - 25
      },
      {
        "name": "Xuxa da Silva",
        "id": 2,
        "profession": "Javascript Specialist",
        "birthDay": new Date().getFullYear() - 80
      },
      {
        "name": "Joaozinho",
        "id": 3,
        "profession": "Java Developer",
        "birthDay": new Date().getFullYear() - 30
      }
    ];

    await deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  };
})();