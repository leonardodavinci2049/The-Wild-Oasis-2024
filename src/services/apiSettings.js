import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    throw new Error(error.message, "Settings could not be loaded");
  }

  return data;
}

// We expect a newSetting object with the new values for the settings
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only one setting in the table, so we can use the id to update it
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error(error.message, "Setting could not be updated");
  }

  return data;
}
