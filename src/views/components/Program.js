import camp from "../../assets/img/camp.jpg";

const Program = () => {
	return (
		<section className="mt-10 py-10 bg-customGray">
			<h1 className="text-3xl font-semibold text-customGray w-fit px-7 h-10 mx-auto py-auto bg-customNavy shadow-md rounded-full">
				Program
			</h1>

			<p className="mt-4 mx-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				asperiores aperiam quo laboriosam neque assumenda! Adipisci amet
				fugiat praesentium maiores sequi necessitatibus assumenda similique
				voluptas perferendis, porro laboriosam temporibus omnis?
			</p>
			<div className="container mx-auto h-full flex flex-wrap justify-center mt-10 ">
				<div className="flex flex-col justify-center items-center m-7 shadow-md rounded-md p-3">
					<div>
						<h4 className="text-2xl font-semibold text-customNavy">
							Kemanusiaan
						</h4>
					</div>
					<div className="mt-5">
						<img
							src={camp}
							alt="camp"
							className="w-72 h-72 object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center m-7 shadow-md rounded-md p-3">
					<div>
						<h4 className="text-2xl font-semibold text-customNavy">
							Pendidikan
						</h4>
					</div>
					<div className="mt-5">
						<img
							src={camp}
							alt="camp"
							className="w-72 h-72 object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center m-7 shadow-md rounded-md p-3">
					<div>
						<h4 className="text-2xl font-semibold text-customNavy">
							Ekonomi
						</h4>
					</div>
					<div className="mt-5">
						<img
							src={camp}
							alt="camp"
							className="w-72 h-72 object-cover rounded-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Program;
