import React, {useState, useEffect} from "react";

import './Root.css';
import 'react-player';
import ReactPlayer from "react-player";

const Root = () => {
	window.addEventListener("resize", resize);
	const [isSmallScreenPortraitVideo, setIsSmallScreenPortraitVideo] = useState(window.innerWidth < 820 ? true : false);
	const [isSmallScreenLandscapeVideo, setIsSmallScreenLandscapeVideo] = useState(window.innerWidth < 900 ? true : false);

	function resize() {
		console.log(window.innerWidth);
		if (window.innerWidth < 820)
			setIsSmallScreenPortraitVideo(true);
		else
			setIsSmallScreenPortraitVideo(false);

		if (window.innerWidth < 900)
			setIsSmallScreenLandscapeVideo(true);
		else
			setIsSmallScreenLandscapeVideo(false);
	}

	function div_container_phone(backgroundColor) {
		if (isSmallScreenLandscapeVideo)
			return {textAlign: 'center', position: 'relative', height: 'auto', minHeight: '100%', width: window.innerWidth, overflow: 'auto', paddingTop: 30, paddingBottom: 30, backgroundColor: backgroundColor, overflowY: 'hidden'}
		else
			return {textAlign: 'center', position: 'relative', height: 'auto', minHeight: '100%', width: window.innerWidth, overflow: 'auto', paddingTop: 30, paddingBottom: 30, backgroundColor: backgroundColor, overflowY: 'hidden'}
	}

	return (
		<div className={"container_background"} style={{width: window.innerWidth}}>
			<div className={"container_headband"}>
				<button style={{fontSize: (isSmallScreenLandscapeVideo ? 10 : 20)}} className={"button_headband"} onClick={() => {window.location.href = "#timebomb"}}>Time Bomb</button>
				<button style={{fontSize: (isSmallScreenLandscapeVideo ? 10 : 20)}} className={"button_headband"} onClick={() => {window.location.href = "#werewolf"}}>Werewolf</button>
				<button style={{fontSize: (isSmallScreenLandscapeVideo ? 10 : 20)}} className={"button_headband"} onClick={() => {window.location.href = "#mazeadventure"}}>Maze Adventure</button>
			</div>

			<div className={"content_container_phone"}>

				<div id={"profil"} style={div_container_phone("#FFF")}>
					<div className={"description_container"}>
						<div style={{color: "#768079", display: 'contents'}}>
							<span className={"description_title"} style={{fontSize: '5vw'}}>Simon Bauchet</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Actuellement étudiant en 4ème année à Epitech.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Epitech est une école de programmation informatique avec une pédagogie par projet, ce qui nous permet d'avoir une expérience technique dès notre première année.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>J'ai réalisé ce site afin de présenter les différents projets que j'ai réalisé cette année pendant mon temps libre.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Je me passionne de créer du nouveau contenu en tout genre grâce au développement.</span>
						</div>
					</div>
				</div>

				<div id={"timebomb"} style={div_container_phone("#FF4655")}>
					<ReactPlayer className={(isSmallScreenPortraitVideo ? "video_container_portrait_phone" : "video_container_portrait")} url={'https://youtu.be/hCzs0sIr5lI'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
					<div className={"description_container"}>
						<div style={{color: "#FFF", display: 'contents'}}>
							<div className={"background_text_container"}>
								<span className={"background_text"} style={{fontSize: (isSmallScreenPortraitVideo ? '35vw' : '20vw')}}>Time Bomb</span>
							</div>
							<span className={"description_title"}>Time Bomb</span>
							<div style={{marginBottom: 30}}>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>NodeJs | React</span>
							</div>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Projet réalisé en 2 semaines pendant mon temps libre.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Ce projet m'a permis d'utiliser énormément de librairies en React, la partie la plus difficile fut d'utiliser correctement les sockets pour ne pas avoir de problèmes d'optimisations.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Le but de ce projet est de pouvoir jouer au jeux de société Time Bomb n'importe où.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Ce jeux se joue principalement à l'oral, il était donc important de faire une interface la plus claire possible afin de se concentrer sur sa stratégie.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toutes personnes peut se joindre à une partie en soirée par example.</span>
						</div>
					</div>
				</div>

				<div id={"werewolf"} style={div_container_phone("#FFF")}>
					<ReactPlayer className={(isSmallScreenPortraitVideo ? "video_container_portrait_phone" : "video_container_portrait")} url={'https://youtu.be/CGfeq1l48JI'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
					<div className={"description_container"}>
						<div style={{color: "#768079", display: 'contents'}}>
							<span className={"description_title"} style={{textAlign: (isSmallScreenPortraitVideo ? 'center' : 'start')}}>WereWolf / </span>
							<span className={"description_title"}>Loup Garou</span>
							<div style={{marginBottom: 30}}>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>NodeJs | React</span>
							</div>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Projet réalisé en 7 jours pendant mon temps libre.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Le but de ce projet est de pouvoir jouer au jeux de société Loup Garou nimporte où.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Il permet d'avoir un mélangeur de rôle afin de pouvoir jouer ou que l'on est.
								Le premier joueur à se connecter est le maître du jeu et peut décider des rôles.
								Quand une personne meurt, elle peut dévoiler son rôle aux autres joueurs avec le bouton de révélation.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toute personne peut se joindre en soirée à une partie par example.</span>
						</div>
					</div>
				</div>

				<div id={"mazeadventure"} style={div_container_phone("#0F1923")}>
					<div className={"description_container"}>
						<div style={{color: "#FFF", display: 'contents'}}>
							<span className={"description_title"}>Maze Adventure</span>
							<div style={{textAlign: 'center', marginBottom: 30}}>
								<div style={{display: "inline-block"}}>
									<ReactPlayer className={(isSmallScreenLandscapeVideo ? "video_container_landscape_phone" : "video_container_phone")}  url={'https://youtu.be/tVsqJKOjwwg'} config={{youtube: {embedOptions: {width: '100%', height: '100%'}, playerVars: {showinfo: 0}}}} playing={true} loop={true}/>
								</div>
							</div>
							<div className={"button_test_container"}>
								<button className={"button_test"} onClick={() => {window.open("https://simmer.io/@cryan/mazeadventure")}}>Tester Maze Adventure</button>
							</div>
							<div style={{marginBottom: 30}}>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")} style={{textDecoration: 'underline'}}>Technologie utilisées:</span>
								<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Unity | C#</span>
							</div>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Projet en cours de réalisation.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Le but du jeux est de trouver la sortie du labyrinthe afin de récolter tous les trésors</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")} style={{textDecoration: 'underline', marginTop: 30}}>Informations sur le jeux: </span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Il y a un système de loot, et de build afin d'aider le joueur dans sa quête.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Le jeux est en cours de réalisation, c'est pourquoi il peut y avoir des bugs et des features manquantes.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>Dans le jeux, un carré vert représente la sortie, celui de couleur bleu représente la clé de la salle secrète, le carré rouge représente la salle secrète lorsqu'elle est fermée, celle-ci passe au orange une fois la clé récupérée.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")} style={{textDecoration: 'underline', marginTop: 30}}>Ce que j'aime:</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>- J'ai designé moi même le système de loot afin de pouvoir gérer le taux de drop de chaque item.</span>
							<span className={(isSmallScreenPortraitVideo ? "description_text_phone" : "description_text")}>- Le système de build, autant la conception pour réaliser quelque chose d'équilibré que la réalisation qui réserve ses petits imprévus !</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Root;