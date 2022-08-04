import { setSlidesAction } from "..";

export const setSlidesMiddleware = () => async (dispatch) => {
  const data = await new Promise((resolve, reject) => {
    // simulating fetch
    setTimeout(() => {
      resolve([
        "https://sun9-47.userapi.com/impg/Qc2y918oiaSK_JQEan8BC929bYpYfkmcRkP8VQ/grBM5sQIq1E.jpg?size=1920x1080&quality=95&sign=04fb9aa5d7e2fe1b2402270a98725a27&type=album",
        "https://sun9-33.userapi.com/impg/DMDujcTm01oO8957MR2PTC4NfDOtrdQRH4gmIg/NYWQiGBKCVc.jpg?size=1920x1080&quality=95&sign=1b1bbefdcf2db2ed09cd9e850cda791d&type=album",
        "https://sun9-10.userapi.com/impg/Hy7TGNE6-N7NbH-iuDHBrgChqfnPRQ92fJE_LQ/xuGntvCPz7w.jpg?size=1920x1080&quality=95&sign=7b34eda8b369bdc7c5a6b37287b1cbb2&type=album",
        "https://sun9-1.userapi.com/impg/9sfnv_j1uwlKaAJ6K3RZTcpfWpgx9rMTBa9cgg/TRt1z199qX8.jpg?size=1920x1080&quality=95&sign=efd48053587c37a4fe2a5bd32ecf62a9&type=album",
        "https://sun9-87.userapi.com/impg/BzPqq9I2akCP8lKljg6fRTMp_sIbL3o09F0c3Q/lIoL5C9hoMw.jpg?size=1920x1080&quality=95&sign=f6f311d23a7b810593c30dd3459fb11e&type=album",
        "https://sun9-24.userapi.com/impg/fIP2Ms-PKcoUokcxVQYuQBS21DwVJpFm-_kQLg/1hXr8DuEso8.jpg?size=900x900&quality=95&sign=973aeeed4235f507b9fa4c9a0ed3c363&type=album",
        "https://sun9-87.userapi.com/impg/Ola5yflK0-3k05bQ72RAIE85OgfP1P-r_z5xfg/u3KeiZpbEBY.jpg?size=1707x1707&quality=95&sign=797f2df76f215cdc458997ad64319805&type=album",
        "https://sun9-52.userapi.com/impg/KxOOf67SW7Zrw0K1BftbnYVukzAN8ggvid09bA/VMbOAC7ClF0.jpg?size=829x1200&quality=95&sign=7c4ec4fa2f1b87368694d49c45f625af&type=album",
      ]);
    }, 3000);
  });

  dispatch(setSlidesAction(data));
};
