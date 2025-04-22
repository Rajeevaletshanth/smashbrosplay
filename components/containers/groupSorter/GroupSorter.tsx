import React, { useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import sharksBanner from "@/public/images/teams/banners/Sharks Cover.jpg";
import birdiesBanner from "@/public/images/teams/banners/Birdies Cover.jpg";
import lsBanner from "@/public/images/teams/banners/Lambert's Smash Cover.jpg";
import exboltsBanner from "@/public/images/teams/banners/Exbolts Cover.jpg";
import redDragonBanner from "@/public/images/teams/banners/Red Dragon Cover.jpg";
import powerBoysBanner from "@/public/images/teams/banners/Power Boys Cover.jpg";
import rgmBanner from "@/public/images/teams/banners/RGM Cover.jpg";
import dcslBanner from "@/public/images/teams/banners/DCSL Wolves Cover.jpg";
import Image from 'next/image';

const ItemType = {
    CARD: 'card',
};

interface CardProps {
    id: number;
    content: string;
    banner: any;
}

const Card: React.FC<CardProps> = ({ id, content, banner }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.CARD,
        item: { id },
        collect: (monitor: any) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    useEffect(() => {
        if (ref.current) {
            drag(ref);
        }
    }, [ref, drag]);

    return (
        <div
            ref={ref}
            className=" my-2  text-black shadow cursor-move overflow-hidden"
            style={{ borderRadius: '10px' }}
        // style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <Image
                src={banner}
                height={30}
                alt="Team Banner"
                priority
                layout="responsive"
            />
            {/* {content} */}
        </div>

    );
};

interface GroupProps {
    name: string;
    cards: CardProps[];
    onDropCard: (id: number) => void;
}

const Group: React.FC<GroupProps> = ({ name, cards, onDropCard }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop(() => ({
        accept: ItemType.CARD,
        drop: (item: { id: number }) => onDropCard(item.id),
    }));

    useEffect(() => {
        if (ref.current) {
            drop(ref);
        }
    }, [ref, drop]);

    return (
        <div ref={ref} className="w-full min-h-[200px] p-3 my-2 rounded" style={{ backgroundColor: '#21262f' }}>
            <h3 className="font-bold text-white mb-2" >{name}</h3>
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
};

const GroupSorter: React.FC = () => {
    const initialCards: CardProps[] = [
        {
            id: 1,
            content: `SHARKS`,
            banner: sharksBanner
        },
        {
            id: 2,
            content: `BIRDIES`,
            banner: birdiesBanner
        },
        {
            id: 3,
            content: `LAMBERT'S SMASH`,
            banner: lsBanner
        },
        {
            id: 4,
            content: `EXBOLTS`,
            banner: exboltsBanner
        },
        {
            id: 5,
            content: `RED DRAGON`,
            banner: redDragonBanner
        },
        {
            id: 6,
            content: `POWER BOYS`,
            banner: powerBoysBanner
        },
        {
            id: 7,
            content: `RACKET GUN MAFIA`,
            banner: rgmBanner
        },
        {
            id: 8,
            content: `DCSL WOLVES`,
            banner: dcslBanner
        },
    ];

    const [ungrouped, setUngrouped] = useState<CardProps[]>(initialCards);
    const [groupA, setGroupA] = useState<CardProps[]>([]);
    const [groupB, setGroupB] = useState<CardProps[]>([]);

    const moveCard = (id: number, targetGroup: 'A' | 'B') => {
        const allCards = [...ungrouped, ...groupA, ...groupB];
        const cardToMove = allCards.find((card) => card.id === id);
        if (!cardToMove) return;

        // Remove card from all lists
        setUngrouped((prev) => prev.filter((card) => card.id !== id));
        setGroupA((prev) => prev.filter((card) => card.id !== id));
        setGroupB((prev) => prev.filter((card) => card.id !== id));

        // Add card to the correct group
        if (targetGroup === 'A') {
            setGroupA((prev) => [...prev, cardToMove]);
        } else {
            setGroupB((prev) => [...prev, cardToMove]);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="">
            <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    width: '100%',
  }}
>
  {/* Left - All Teams */}
  {ungrouped.length > 0 && (
    <div style={{ flex: 1 }}>
      <Group name="All Teams" cards={ungrouped} onDropCard={() => {}} />
    </div>
  )}

  {/* Right - Group A on top of Group B */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      flex: 1,
    }}
  >
    <Group name="Group A" cards={groupA} onDropCard={(id) => moveCard(id, 'A')} />
    <Group name="Group B" cards={groupB} onDropCard={(id) => moveCard(id, 'B')} />
  </div>
</div>

            </div>
        </DndProvider>
    );
};

export default GroupSorter;
