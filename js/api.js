export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a502141cd6f97ff96bb68d7c77410302&lang=en&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}