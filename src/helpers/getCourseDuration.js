const getCourseDuration = (minutes) => {
	const hours = Math.trunc(minutes / 60);
	const restOfMinutes = minutes - hours * 60;

	return `${hours}:${restOfMinutes} hours`;
};

export default getCourseDuration;
