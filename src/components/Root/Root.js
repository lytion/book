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


	return (
		<div className={"container_background"}>
			<div className={"container_headband"}>
				<button className={"text_headband"} style={{marginLeft: '0%'}}>Werewolf</button>
				<button className={"text_headband"}>Time Bomb</button>
				<button className={"text_headband"}>Maze Adventure</button>
			</div>
			<div className={"container_body"} style={{height: window.innerHeight}}>
				<h2 className={"name"}>Simon Bauchet</h2>
				<div style={{backgroundColor: '#FFF', height: window.innerHeight}}>
					<p style={{color: '##7D7F7B'}}>Etudiant à Epitech en 4ème année, je suis passionné de l'informatique.</p>
				</div>
				<div style={{backgroundColor: '#FF4655', height: window.innerHeight+window.innerHeight*0.05, padding: 5, display: 'flex', width: 'fit-content', flexDirection: isSmallScreenPortraitVideo ? 'column' : ''}}>
					<div style={{marginTop: window.innerHeight*0.10, width: window.innerWidth, display: 'flex'}}>
						<ReactPlayer url={'https://youtu.be/hCzs0sIr5lI'} config={{youtube: {embedOptions: {width: 300, height: 635}, playerVars: {showinfo: 0}}}} className={"video_container_portrait"} playing={true} loop={true}/>
						<div style={{flexDirection: 'column'}}>
							<p style={{display: 'flex', marginLeft: 15}}>Technologie utilisées: NodeJs, React</p>
							<p style={{display: 'flex', marginLeft: 15}}>Projet réalisé en 2 semaines pendant mon temps libre.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Le but de ce projet est de pouvoir jouer au jeux de société Time Bomb n'importe où.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toute personne peut se joindre en soirée à une partie par example.</p>
						</div>
					</div>
				</div>
				<div style={{backgroundColor: '#FFF', height: window.innerHeight, padding: 5, display: 'flex', width: 'fit-content', flexDirection: isSmallScreenPortraitVideo ? 'column' : ''}}>
					<div style={{marginTop: window.innerHeight*0.10, width: window.innerWidth, display: 'flex'}}>
					<ReactPlayer url={'https://youtu.be/CGfeq1l48JI'} config={{youtube: {embedOptions: {width: 300, height: 635}, playerVars: {showinfo: 0}}}} className={"video_container_portrait"} playing={true} loop={true}/>
						<div style={{flexDirection: 'column'}}>
							<p style={{display: 'flex', marginLeft: 15}}>Technologie utilisées: NodeJs, React</p>
							<p style={{display: 'flex', marginLeft: 15}}>Projet réalisé en 7 jours pendant mon temps libre.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Le but de ce projet est de pouvoir jouer au jeux de société Loup Garou nimporte où.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Il permet d'avoir un mélangeur de rôle afin de pouvoir jouer ou que l'on est.
								Le premier joueur à se connecter est le maître du jeu et peut décider des rôles.
								Quand une personne meurt, elle peut dévoiler son rôle aux autres joueurs avec le bouton de révélation.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Je n'ai pas réalisé d'application pour ce projet car je veux que tout le monde puisse y jouer sans rien installer, ainsi toute personne peut se joindre en soirée à une partie par example.</p>
						</div>
					</div>
				</div>
				<div style={{backgroundColor: '#0F1923', height: window.innerHeight, padding: 5, display: 'flex', width: 'fit-content', alignItems: 'center', flexDirection: isSmallScreenLandscapeVideo ? 'column' : ''}}>
					<div style={{marginTop: window.innerHeight*0.10, width: window.innerWidth, display: 'flex'}}>
					<ReactPlayer url={'https://youtu.be/tVsqJKOjwwg'} config={{youtube: {embedOptions: {width: 635, height: 300}, playerVars: {showinfo: 0}}}} className={"video_container_landscape"} playing={true} loop={true}/>
						<div style={{flexDirection: 'column'}}>
							<p style={{display: 'flex', marginLeft: 15}}>Technologie utilisées: Unity, C#</p>
							<p style={{display: 'flex', marginLeft: 15}}>Projet en cours de réalisation.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Le but du jeux est de trouver la sortie du labyrinthe afin de récolter tous les trésors</p>
							<p style={{display: 'flex', marginLeft: 15}}>Il y a un système de loot, et de build afin d'aider le joueur dans sa quête.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Le jeux est en cours de réalisation, c'est pourquoi il peut y avoir des bugs et des features manquantes.</p>
							<p style={{display: 'flex', marginLeft: 15}}>Dans le jeux, un carré vert représente la sortie, celui de couleur bleu représente la clé de la salle secrète, le carré rouge représente la salle secrète lorsqu'elle est fermée, celle-ci passe au orange une fois la clé récupérée.</p>
							<p style={{display: 'flex', marginLeft: 15, fontWeight: 'bold'}}>Ce que j'aime:</p>
							<p style={{display: 'flex', marginLeft: 15}}>- J'ai designé moi même le système de loot afin de pouvoir gérer le taux de drop de chaque item.</p>
							<p style={{display: 'flex', marginLeft: 15}}>- Le système de build, autant la conception pour réaliser quelque chose d'équilibré que la réalisation qui réserve ses petits imprévus !</p>
							<p style={{display: 'flex', marginLeft: 15}}>Pour le tester &nbsp; <a href={'https://simmer.io/@cryan/mazeadventure'} target={'_blank'}> cliquez ici</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Root;