import AddMediaIcon from "~/assets/icons/AddMediaIcon";

export default function AddMedia() {
  return (
    <label className="flex flex-col  justify-center items-center  border-dashed border-2 border-zinc-800 h-80 w-40 rounded-lg">
      <span className="flex flex-col justify-center items-center gap-2">
        <AddMediaIcon />
        <p>Add Media</p>
      </span>
      <input type="file" name="file_upload" className="hidden" />
    </label>
  );
}
