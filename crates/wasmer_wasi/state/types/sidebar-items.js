initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_Stderr",""],["_IMPL_DESERIALIZE_FOR_Stdin",""],["_IMPL_DESERIALIZE_FOR_Stdout",""],["_IMPL_SERIALIZE_FOR_HostFile",""],["_IMPL_SERIALIZE_FOR_Stderr",""],["_IMPL_SERIALIZE_FOR_Stdin",""],["_IMPL_SERIALIZE_FOR_Stdout",""],["_WasiFile_registry",""]],"enum":[["PollEvent",""],["WasiFsError","Error type for external users"]],"fn":[["host_file_bytes_available",""],["iterate_poll_events",""],["platform_poll_events_to_pollevent_set",""],["poll",""],["poll_event_set_to_platform_poll_events",""]],"static":[["__init11443140379011782265",""],["__init13307808497877035200",""],["__init4101275917581315507",""],["__init8582603105775486881",""]],"struct":[["HostFile","A thin wrapper around `std::fs::File`"],["PollEventBuilder",""],["PollEventIter",""],["Stderr","A wrapper type around Stderr that implements `WasiFile` and `Serialize` + `Deserialize`."],["Stdin","A wrapper type around Stdin that implements `WasiFile` and `Serialize` + `Deserialize`."],["Stdout","A wrapper type around Stdout that implements `WasiFile` and `Serialize` + `Deserialize`."]],"trait":[["WasiFile","This trait relies on your file closing when it goes out of scope via `Drop`"],["WasiPath",""]],"type":[["PollEventSet",""]]});