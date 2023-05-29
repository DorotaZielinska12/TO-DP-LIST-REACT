export const getExampleTasks = async () => {
    const response = await fetch("/TO-DP-LIST-REACT/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};