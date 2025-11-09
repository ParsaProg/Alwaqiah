import MainQuranPage from "@/components/ui/quran/main/MainQuranPage";
import MobileQuranPage from "@/components/ui/quran/main/MobileQuranPage";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Settings2,
} from "lucide-react";

export default function QuranPage() {
  return (
    <div className="w-full flex-wrap flex flex-col items-center justify-center mx-auto">
      <div className="w-full flex flex-wrap items-center gap-y-8 justify-around mx-auto bg-[#dedbdb] p-5 text-black">
        <button className="hover:bg-primary-Light hover:text-white transition-colors duration-200 cursor-pointer rounded-lg text-primary-Light p-3 bg-white">
          <Settings2 size={20} />
        </button>
        <section className="flex items-center gap-x-2">
          <h3>سوره:</h3>
          <div className="gap-x-5 overflow-hidden text-start bg-white rounded-lg p-1 [@media(max-width:770px)]:w-[150px] w-[200px] border-[0.5px] border-[#0638fe34] text-sm text-black flex justify-start items-center">
            <input
              defaultValue={"1.حمد"}
              className="w-full outline-none border-none bg-transparent px-2"
            />
            <section className="flex items-center gap-x-1">
              <div className="p-1 cursor-pointer rounded-r-md bg-slate-300 text-black">
                <ChevronRight size={20} />
              </div>
              <div className="p-1 cursor-pointer rounded-l-md bg-slate-300 text-black">
                <ChevronLeft size={20} />
              </div>
            </section>
          </div>
          <button className="bg-primary-Light text-white p-2 rounded-lg">
            <Info size={18} />
          </button>
        </section>
        <section className="flex items-center gap-x-2">
          <h3>آیه:</h3>
          <div className="overflow-hidden text-center bg-white rounded-lg p-2 [@media(max-width:770px)]:w-[90px] w w-[130px] border-[0.5px] border-[#0638fe34] text-sm text-black flex justify-start items-start">
            <input
              defaultValue={"1"}
              className="w-full text-center px-2 outline-none border-none bg-transparent roundedf-lg"
            />
          </div>
        </section>
        <section className="flex items-center gap-x-2">
          <h3>جزء :</h3>
          <div className="gap-x-5 overflow-hidden text-start bg-white rounded-lg p-1 [@media(max-width:770px)]:w-[130px] w-[200px] border-[0.5px] border-[#0638fe34] text-sm text-black flex justify-start items-center">
            <input
              defaultValue={"1"}
              className="w-full outline-none border-none bg-transparent px-2"
            />
            <section className="flex items-center gap-x-1">
              <div className="p-1 cursor-pointer rounded-r-md bg-slate-300 text-black">
                <ChevronRight size={20} />
              </div>
              <div className="p-1 cursor-pointer rounded-l-md bg-slate-300 text-black">
                <ChevronLeft size={20} />
              </div>
            </section>
          </div>
        </section>
        <section className="flex items-center gap-x-2">
          <h3>صفحه:</h3>
          <div className="gap-x-5 overflow-hidden text-start bg-white rounded-lg p-1 [@media(max-width:770px)]:w-[120px] w-[200px] border-[0.5px] border-[#0638fe34] text-sm text-black flex justify-start items-center">
            <input
              defaultValue={"1"}
              className="w-full outline-none border-none bg-transparent px-2"
            />
            <section className="flex items-center gap-x-1">
              <div className="p-1 cursor-pointer rounded-r-md bg-slate-300 text-black">
                <ChevronRight size={20} />
              </div>
              <div className="p-1 cursor-pointer rounded-l-md bg-slate-300 text-black">
                <ChevronLeft size={20} />
              </div>
            </section>
          </div>
        </section>

        <section className="cursor-pointer flex items-center gap-x-1">
          <h1 className="text-sm">احمد دباغ (ترتیل)</h1>
          <div
            className="rounded-full w-6 h-6"
            style={{
              backgroundImage:
                "url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDOTFFMzM3QkI4QjExRUE5MjAzQzE5QUVDRTA3OUM2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDOTFFMzM2QkI4QjExRUE5MjAzQzE5QUVDRTA3OUM2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI2RjNEQjYzNDhFMzZDMTM3QjYyRTcxMTVBQkY1RUY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0iNkYzREI2MzQ4RTM2QzEzN0I2MkU3MTE1QUJGNUVGOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAAyADIDASIAAhEBAxEB/8QAiQAAAgMBAQEAAAAAAAAAAAAAAAUCAwQGAQcBAAMBAQAAAAAAAAAAAAAAAAIDBAABEAACAQMDAQUEBgsAAAAAAAABAgMAEQQhMRIFQVFxMhNhkSJC8MFSMxQ1gaGCwkNTk8M0FQYRAAICAAYBBAMAAAAAAAAAAAABEQIhMUFREgNxYTJCchMzFP/aAAwDAQACEQMRAD8Ax8QbAHUDW+1SspFwdANb0AKNd7jbur0weuDjKdZrJz7uWlPYAvkzJppeGChk1tfjyN/ZVOavW4EMkiOiDUkAWHur6DiYGJhYwigiChRbnsffWTqeMk2LLEBy9RStvGpLd1p9ChdVY1k+b/j8tfMeQPfV8LLOpe508w7qx5ETwStG4sVJBv7KtwGJlaIfxFN/FdaK1VxlYAUb5JPwaeKd3b+qio6/VRS8dyrjXY6IWYajYaW+upxySxuJYVBnQj073K37NBU4sfIlDGKMkILyHsHjer1x5IJonkIVbqSqnUA9tV2ahqdCFJyvJvk6TkZ7wySZjpOqgyoLNHy+bijab+NaTjphwtGZGmc7u/HT9CgUiwM44+SwBlzMm55KObCME7fZFbeo54F+LXLCo9ILYxE5xID1KaZkEhdgYwdgb/EdL0ryIkP/AEAjx0tyX4h7Sp191MopWaeyGxYGzWvrvUJsRh1LHnW5YBlkPafhJFdp7+L+SgG/621mrcin/Vv3fNRTSzd5op/89d7CPz3M2P1fJ6n1JY8eBI+nkkzQy2K8XFnZnte57KtigOLEccP6qRu/pWvojHRRetAwcTBwuMasJXIZ3c6nQeFew9Py52DqlkPzt8Nbrhy3gkbtUQs28RZP1SXDyh6ztwtdY1sq3Pzt2saXrmmVjqeFzxv7da6TqfRMJMCafL5TGFS44kJY+wkGuUGBJ6ihG5QSKHjfTYi5U22ZdjQ2VVLR2trNpPEc9LvJMOK8m7AKcSY6RfE3xSnt7F8KOkYcuHFF+HAKyAeuXGpB1uG3Fu6mzQp97INANrXsPCgVMZ1CtfDjoIPRP2u29FP+UH8pu77s7e6imcrbioWxRk/maf3Ntvpat77UUUNMn5Gdma+qEX/V/k77+dfLtv8AP7Kzn8oi+43T/H32Xz/vUUUWjAWaHHT9n8Rv9NqYDzUUVlkZ5mX+p5/p+zRRRWOH/9k=)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <ChevronDown size={15} color="black" className="cursor-pointer" />
        </section>
      </div>

      <div className="mt-[50px] w-[98%]">
        <div className="[@media(max-width:1130px)]:hidden visible">
          <MainQuranPage />
        </div>
        <div className="[@media(min-width:1130px)]:hidden visible">
          <MobileQuranPage />
        </div>
      </div>
    </div>
  );
}
