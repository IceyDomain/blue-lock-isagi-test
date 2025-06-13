namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const EnemyGoal = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const GoalBox = SpriteKind.create()
    export const EnemyGoalBox = SpriteKind.create()
    export const RinsUltAura = SpriteKind.create()
    export const Kaisers_Predator_Eye = SpriteKind.create()
    export const Kaisers_Bullseye = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const Goal_Path_Correct = SpriteKind.create()
    export const Goal_Path_Wrong = SpriteKind.create()
    export const EnemyDefense = SpriteKind.create()
    export const EnemyDefenderView = SpriteKind.create()
    export const Teammate = SpriteKind.create()
    export const Teammate_Barrier = SpriteKind.create()
    export const EnemyBarrier = SpriteKind.create()
    export const Prop = SpriteKind.create()
}
namespace StatusBarKind {
    export const Probability = StatusBarKind.create()
}
function Off_the_ball_Movement () {
    if (Off_The_ball_Movement_Cooldown == 0) {
        controller.moveSprite(mySprite, 200, 200)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), 500)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 500)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 4 f f f f f f 4 e f . . 
            . . f f f 4 4 e e e 4 4 f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 4 d d 4 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        pause(500)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        controller.moveSprite(mySprite, 100, 100)
        Off_The_ball_Movement_Cooldown = 500
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        if (otherSprite.overlapsWith(myDart)) {
            myDart.follow(sprite, 100)
            tiles.placeOnTile(otherSprite, tiles.getTileLocation(otherSprite.tilemapLocation().column + 1, otherSprite.tilemapLocation().row + 1))
            otherSprite.follow(sprite, 0)
            pause(5000)
            otherSprite.follow(myDart, 60)
        }
    }
})
function Overtime_Lucky_Shot () {
	
}
function Off_the_ball_Movement_Flow () {
    if (Off_The_ball_Movement_Cooldown == 0) {
        controller.moveSprite(mySprite, 200, 200)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), 1000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 4 f f f f f f 4 e f . . 
            . . f f f 4 4 e e e 4 4 f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 4 d d 4 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        pause(500)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        controller.moveSprite(mySprite, 100, 100)
        Off_The_ball_Movement_Cooldown = 200
    }
}
function Instinctive_Movement () {
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 2000)
    spriteutils.setVelocityAtAngle(mySprite, spriteutils.angleFrom(mySprite, myDart), 100)
    pause(2000)
    spriteutils.setVelocityAtAngle(mySprite, spriteutils.angleFrom(mySprite, myDart), 0)
    tiles.placeOnTile(myDart, mySprite.tilemapLocation())
    myDart.follow(mySprite)
    for (let value of sprites.allOfKind(SpriteKind.Goal)) {
        myDart.follow(mySprite, 0)
        spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, value), 100)
    }
    story.spriteSayText(mySprite, "Nice Shot", 7, 1, story.TextSpeed.Normal)
    pause(500)
    spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, myDart), 0)
}
scene.onOverlapTile(SpriteKind.Projectile2, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile8`)
})
function Trivela () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -400)
        myDart.ay = -400
        myDart.ax = -400
        story.spriteSayText(mySprite, "Trivela", 6, 2, story.TextSpeed.Slow)
        pause(1)
        myDart.setVelocity(0, 0)
        myDart.ax = 0
        myDart.ay = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Goal, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Projectiles_on_screen = 0
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setTileAt(value, assets.tile`myTile9`)
    }
})
function Aikus_Flow () {
    Flow += 1
    Scoring_or_Trapping_probability.value += 10
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    pause(10000)
    Flow += -1
}
function Move_it_Variant () {
	
}
function Center_of_Gravity_Full_Burst () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.follow(mySprite, 0)
        mySprite2.follow(myDart, 0)
        for (let value of sprites.allOfKind(SpriteKind.EnemyGoalBox)) {
            mySprite2.follow(value, 0)
        }
        story.spriteSayText(mySprite, "Center of Gravity Full Burst", 6, 2, story.TextSpeed.Normal)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 5000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5000)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(mySprite2.tilemapLocation().column + 1, mySprite2.tilemapLocation().row + 1))
        pause(5000)
        mySprite2.follow(myDart, 60)
    }
}
function Overtime_Reflexive_movement__Direct_Shot () {
    mySprite.follow(myDart, 200)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f 7 7 e e e 7 7 f f . . 
        . f f e f b f 7 7 f b f e f f . 
        . f e e 4 1 7 d d 7 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -400)
        myDart.ay = 0
        pause(500)
        myDart.setVelocity(0, 0)
    }
    mySprite.follow(myDart, 0)
    pause(2000)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    tiles.placeOnRandomTile(myDart, assets.tile`myTile`)
}
function Flow_Curve_Shot () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -200)
        myDart.ay = -200
        myDart.ax = -300
        pause(500)
        myDart.setVelocity(0, 0)
        myDart.ax = 0
        myDart.ay = 0
    }
}
function Blitz_Ult () {
    if (Blitz_Cooldown == 0) {
        controller.moveSprite(mySprite, 300, 300)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 1000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 9 f f f f f f 9 e f . . 
            . . f f f 8 9 e e e 8 8 f f . . 
            . f f e f b f 9 9 f b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        pause(2000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        controller.moveSprite(mySprite, 100, 100)
        Blitz_Cooldown = 500
    }
}
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Isagi == 1) {
        if (Flow == 1) {
            Off_the_ball_Movement_Flow()
        } else if (Ult == 1) {
            if (Overtime == 1 && mySprite.overlapsWith(myDart)) {
                Overtime_Reflexive_movement__Direct_Shot()
            } else {
                Relexive_movement()
            }
        } else {
            Off_the_ball_Movement()
        }
    } else if (Rin == 1) {
        if (Flow == 1) {
            Oppisite_DirectionWithout_ball_Flow()
        } else if (Ult == 1) {
            Oppisite_DirectionWithout_ball_Ult()
        } else {
            if (!(mySprite.overlapsWith(myDart))) {
                Oppisite_DirectionWithout_ball()
            } else {
            	
            }
        }
    } else if (Kaiser == 1) {
        if (Flow == 1) {
            Blitz_Flow()
        } else if (Ult == 1) {
            Blitz_Ult()
        } else {
            Blitz()
        }
    }
})
sprites.onOverlap(SpriteKind.Teammate, SpriteKind.Teammate, function (sprite, otherSprite) {
    sprite.setVelocity(100, 0)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Kaisers_Predator_Eye, function (sprite, otherSprite) {
    Target = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 . 8 8 8 . . . . 
        . . . 8 8 2 2 . 9 . 2 2 8 8 . . 
        . . 8 . 2 . . . 9 . . . 2 . 8 . 
        . . 8 2 . . . . 9 . . . . 2 8 . 
        . 8 2 . . . . . 9 . . . . . 2 8 
        . 8 2 . . . . . 9 . . . . . 2 8 
        . 8 . . . . . 9 9 9 . . . . . 8 
        . . 9 9 9 9 9 9 2 9 9 9 9 9 9 . 
        . 8 . . . . . 9 9 9 . . . . . 8 
        . 8 2 . . . . . 9 . . . . . 2 8 
        . 8 2 . . . . . 9 . . . . . 2 8 
        . . 8 2 . . . . 9 . . . . 2 8 . 
        . . 8 . 2 . . . 9 . . . 2 . 8 . 
        . . . 8 8 2 2 . 9 . 2 2 8 8 . . 
        . . . . . 8 8 8 . 8 8 8 . . . . 
        `, SpriteKind.Kaisers_Bullseye)
    tiles.placeOnTile(Target, sprite.tilemapLocation())
    pause(100)
    sprites.destroy(Target)
})
browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Isagi == 1) {
        if (Ult == 1) {
            Move_it()
        }
    } else if (Rin == 1) {
        if (Ult == 1) {
            Center_of_Gravity_Full_Burst()
        }
    } else if (Aiku == 1) {
        if (Ult != 1) {
            if (Flow == 1) {
            	
            } else {
                if (!(mySprite2.overlapsWith(myDart))) {
                    if (spriteutils.distanceBetween(mySprite, myDart) < 60) {
                        Instinctive_Movement()
                    }
                }
            }
        } else if (Ult == 1) {
            if (Ult_Flow == 1) {
            	
            } else {
            	
            }
        }
    }
})
function Kaisers_Flow_With_Predators_Eye () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 8 8 e e e 8 8 f f . . 
            . f f e f b 2 4 4 2 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e 8 2 2 2 2 2 2 8 f f . . 
            . f f e 2 8 f f f f f 2 e f f . 
            . f f f f 8 8 e e e 8 f f f f . 
            . . f e f b 2 4 4 2 b f e f . . 
            . . f e 4 1 9 d d 9 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 2 8 e e e 8 2 f f . . 
            . f f e f b 2 4 4 2 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        Flow += 1
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        Kaisers_Predators_Eyes = sprites.create(img`
            9999999999999999999999999999999999999999
            9222222222222222222222222222222222222229
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9299999999999999999999999999999999999929
            9222222222222222222222222222222222222229
            9999999999999999999999999999999999999999
            `, SpriteKind.Kaisers_Predator_Eye)
        Kaisers_Predators_Eyes.setFlag(SpriteFlag.Invisible, true)
        Kaisers_Predators_Eyes.startEffect(effects.spray)
        tiles.placeOnTile(Kaisers_Predators_Eyes, mySprite.tilemapLocation())
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        Kaisers_Predators_Eyes.follow(mySprite, 100)
    })
    pause(10000)
    Flow += -1
    sprites.destroy(Kaisers_Predators_Eyes)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
}
function Move_it () {
    if (mySprite.overlapsWith(mySprite2)) {
        story.spriteSayText(mySprite, "Move It", 7, 15, story.TextSpeed.VerySlow)
        myDart.follow(mySprite, 100)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(mySprite2.tilemapLocation().column + 1, mySprite2.tilemapLocation().row + 1))
        mySprite2.follow(mySprite, 0)
        pause(5000)
        mySprite2.follow(mySprite, 60)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Isagi == 1) {
        if (mySprite.overlapsWith(myDart)) {
            myDart.follow(mySprite, 300)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                value.follow(myDart, 60)
            }
            for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
                value.follow(myDart, 0)
            }
            if (mySprite.overlapsWith(mySprite2)) {
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Explosion), 1000)
                mySprite2.follow(myDart, 0)
                pause(2000)
                for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                    value.follow(myDart, 60)
                }
            }
        }
    } else if (Rin == 1) {
        if (mySprite.overlapsWith(myDart)) {
            myDart.follow(mySprite, 300)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                value.follow(myDart, 60)
            }
            for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
                value.follow(myDart, 0)
            }
            if (mySprite.overlapsWith(mySprite2)) {
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Explosion), 1000)
                mySprite2.follow(myDart, 0)
                pause(2000)
                for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                    value.follow(myDart, 60)
                }
            }
        }
    } else if (Kaiser == 1) {
        if (mySprite.overlapsWith(myDart)) {
            myDart.follow(mySprite, 300)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                value.follow(myDart, 60)
            }
            for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
                value.follow(myDart, 0)
            }
            if (mySprite.overlapsWith(mySprite2)) {
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Explosion), 1000)
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 1000)
                mySprite2.follow(myDart, 0)
                pause(2000)
                for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                    value.follow(myDart, 60)
                }
            }
        }
    } else if (Aiku == 1) {
        if (mySprite.overlapsWith(myDart)) {
            myDart.follow(mySprite, 300)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                value.follow(myDart, 60)
            }
            for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
                value.follow(myDart, 0)
            }
            if (mySprite.overlapsWith(mySprite2)) {
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Explosion), 1000)
                extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Explosion), 1000)
                mySprite2.follow(myDart, 0)
                pause(2000)
                for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                    value.follow(myDart, 60)
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.EnemyDefenderView, function (sprite, otherSprite) {
    for (let value of sprites.allOfKind(SpriteKind.EnemyDefense)) {
        value.follow(sprite, 70)
    }
})
function Kaisers_Ult () {
    if (mySprite.overlapsWith(myDart)) {
        for (let value of tiles.getTilesByType(sprites.castle.tileGrass1)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
        }
        for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
        }
        Ult = 1
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.EnemyGoalBox, function (sprite, otherSprite) {
    if (sprite.overlapsWith(myDart)) {
        myDart.follow(sprite, 0)
        sprite.follow(otherSprite, 0)
        spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(sprite, otherSprite), 100)
    }
})
sprites.onOverlap(SpriteKind.Teammate, SpriteKind.Teammate_Barrier, function (sprite, otherSprite) {
    sprite.vx += 100
    pause(200)
    sprite.vx = 0
})
function Destroyer_Flow () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 6 f f f f f f 6 e f . . 
            . . f f f 6 2 e e e 2 2 f f . . 
            . f f e f b 6 4 4 6 b f e f f . 
            . f e e 4 1 6 d d 6 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e 6 2 2 2 2 2 2 6 f f . . 
            . f f e 2 6 f f f f f 6 e f f . 
            . f f f f 2 2 e e e 2 f f f f . 
            . . f e f b 6 4 4 6 b f e f . . 
            . . f e 4 1 6 d d 6 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 6 f f f f f f 6 e f . . 
            . . f f f 6 2 e e e 2 2 f f . . 
            . f f e f b 6 4 4 6 b f e f f . 
            . f e e 4 1 6 d d 6 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        Ult_Flow += 1
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    })
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setVelocity(100, 0)
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    myDart.follow(mySprite2, 0)
    mySprite2.follow(myDart, 70)
    myDart.ay = 0
    myDart.vy = 0
    myDart.vx = 0
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.follow(mySprite, 0)
        value.follow(myDart, 70)
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
        value.follow(myDart, 70)
        tiles.placeOnRandomTile(value, sprites.castle.tileGrass1)
    }
    for (let value of sprites.allOfKind(SpriteKind.EnemyDefense)) {
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(myDart, assets.tile`myTile5`)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile1`, function (sprite, location) {
    if (!(mySprite.overlapsWith(sprite))) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mySprite4, location)
        mySprite4.follow(mySprite, 200)
    } else {
    	
    }
})
function Curve_Shot () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -200)
        myDart.ay = -100
        myDart.ax = -250
        pause(500)
        myDart.setVelocity(0, 0)
        myDart.ax = 0
        myDart.ay = 0
    }
}
function Isagis_Ult () {
    for (let value of tiles.getTilesByType(sprites.castle.tileGrass1)) {
        tiles.setTileAt(value, assets.tile`myTile1`)
    }
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(value, assets.tile`myTile1`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    Ult = 1
    if (mySprite.overlapsWith(myDart)) {
        story.spriteSayText(mySprite, "I am", 15, 1)
        story.spriteSayText(mySprite, "A Striker", 7, 15)
    } else if (!(mySprite.overlapsWith(myDart))) {
        story.spriteSayText(mySprite, "" + convertToText(myDart.tilemapLocation()) + "Off the ball", 15, 1)
        story.printDialog("Uh Isagi", 80, 90, 50, 150, 15, 1)
        story.spriteSayText(mySprite, "I need you to shut up genius I'm getting to the good part", 7, 15, story.TextSpeed.Normal)
    }
    mySprite8 = sprites.create(img`
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff
        77777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f7777
        7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        `, SpriteKind.Prop)
    no1 = sprites.create(img`
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f777f777
        ........f77f7f77
        ........fff777ff
        ........f77f7f77
        ........f77f7f77
        `, SpriteKind.Prop)
    no2 = sprites.create(img`
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        777f777f........
        77f7f77f........
        ff777fff........
        77f7f77f........
        77f7f77f........
        `, SpriteKind.Prop)
    no3 = sprites.create(img`
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff
        77777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f777777f7777
        7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff7f7f7ff
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77f777f77
        `, SpriteKind.Prop)
    mySprite8.setFlag(SpriteFlag.RelativeToCamera, true)
    no1.setFlag(SpriteFlag.RelativeToCamera, true)
    no2.setFlag(SpriteFlag.RelativeToCamera, true)
    no3.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite8.setPosition(74, 4)
    no1.setPosition(0, 52)
    no2.setPosition(152, 60)
    no3.setPosition(76, 115)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Teammate, SpriteKind.GoalBox, function (sprite, otherSprite) {
    if (sprite.overlapsWith(myDart)) {
        myDart.follow(sprite, 0)
        sprite.follow(otherSprite, 0)
        spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(sprite, otherSprite), 100)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.EnemyBarrier, function (sprite, otherSprite) {
    sprite.vx += 100
    pause(200)
    sprite.vx = 0
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 100)
    sprite.follow(otherSprite, 0)
    for (let value of sprites.allOfKind(SpriteKind.EnemyGoalBox)) {
        sprite.follow(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
        value.follow(myDart)
    }
})
function Snake_clearance () {
    extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 2000)
    myDart.follow(mySprite, 0)
    myDart.setVelocity(0, -200)
    pause(500)
    myDart.setVelocity(0, 0)
}
function Oppisite_DirectionWithout_ball () {
    if (Opposite_Direction_Cooldown == 0) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            if (spriteutils.distanceBetween(mySprite, value) < 70) {
                value.follow(myDart, 0)
            }
        }
        for (let index = 0; index < 10; index++) {
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 2000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 2000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
        }
        pause(2000)
        Opposite_Direction_Cooldown = 500
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(myDart, 60)
        }
    }
}
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile2`, function (sprite, location) {
    if (!(sprite.overlapsWith(mySprite))) {
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.placeOnTile(sprite, value)
        }
    }
})
scene.onOverlapTile(SpriteKind.EnemyDefense, assets.tile`transparency16`, function (sprite, location) {
    if (sprite.overlapsWith(myDart)) {
        spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(sprite, mySprite2), 100)
        pause(100)
        tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
        sprite.follow(myDart, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mySprite.sayText("Score", 100, false)
})
function Isagis_Flow () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 8 8 e e e 8 8 f f . . 
            . f f e f b 8 4 4 8 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e 8 2 2 2 2 2 2 8 f f . . 
            . f f e 8 8 f f f f f 8 e f f . 
            . f f f f 8 8 e e e 8 f f f f . 
            . . f e f b 8 4 4 8 b f e f . . 
            . . f e 4 1 9 d d 9 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 8 8 e e e 8 8 f f . . 
            . f f e f b 8 4 4 8 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        Flow += 1
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    })
    pause(10000)
    Flow += -1
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
}
function Kaisers_Impact () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -300)
        myDart.ay = 0
        pause(500)
        myDart.setVelocity(0, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
})
function Oppisite_DirectionWithout_ball_Flow () {
    if (Opposite_Direction_Cooldown == 0) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            if (spriteutils.distanceBetween(mySprite, value) < 100) {
                value.follow(myDart, 0)
            }
        }
        for (let index = 0; index < 20; index++) {
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 3000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 3000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 3000)
        }
        pause(3000)
        Opposite_Direction_Cooldown = 200
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(myDart, 60)
        }
    }
}
info.onLifeZero(function () {
	
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile6`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    if (Kaiser == 1) {
        if (Ult == 1) {
            if (Projectiles_on_screen != 1) {
                mySprite3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 8 . . . . . . . 
                    . . . . . . . 8 9 8 . . . . . . 
                    . . . . . . 8 9 2 9 8 . . . . . 
                    . . . . . . . 8 9 8 . . . . . . 
                    . . . . . . . . 8 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile2)
                tiles.placeOnTile(mySprite3, myDart.tilemapLocation())
                for (let value of sprites.allOfKind(SpriteKind.Goal)) {
                    spriteutils.setVelocityAtAngle(mySprite3, spriteutils.angleFrom(mySprite, value), 100)
                }
                Projectiles_on_screen += 1
            } else {
            	
            }
        }
    }
})
function Oppisite_DirectionWithout_ball_Ult () {
    if (Opposite_Direction_Cooldown == 0) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            if (spriteutils.distanceBetween(mySprite, value) < 150) {
                value.follow(myDart, 0)
            }
        }
        for (let index = 0; index < 30; index++) {
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 5000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5000)
        }
        pause(5000)
        Opposite_Direction_Cooldown = 400
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(myDart, 60)
        }
    }
}
function Kaisers_ult_Flow_With_Predators_Eye () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 8 8 e e e 8 8 f f . . 
            . f f e f b 2 4 4 2 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e 8 2 2 2 2 2 2 8 f f . . 
            . f f e 2 8 f f f f f 2 e f f . 
            . f f f f 8 8 e e e 8 f f f f . 
            . . f e f b 2 4 4 2 b f e f . . 
            . . f e 4 1 9 d d 9 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 8 f f f f f f 8 e f . . 
            . . f f f 2 8 e e e 8 2 f f . . 
            . f f e f b 2 4 4 2 b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        Ult_Flow += 1
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        Kaisers_Predators_Eyes = sprites.create(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222229
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999929
            9222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222229
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            `, SpriteKind.Kaisers_Predator_Eye)
        animation.runImageAnimation(
        Kaisers_Predators_Eyes,
        [img`
            9.9.9.....................9.9.9........9.9.9.....................9.9.9..............................
            99999........9.9.9........99999........99999........9.9.9........99999..............................
            99999........99999........96998........96998........99999........96998........9.9.9.................
            96998........96998........99988........99988........96998........99988........99999........9.9.9....
            99988........99988.........988..........988.........99988.........988.........99999........99999....
            .988.99......9988...........9..99........9..99.......988...........9..99......96998........96998....
            ..9.999........9..99........9.99.........9.99.........9..99........9.99.......99988........99988....
            ..9.99.9.9.9...9.99.........9.99.9.9.9...9.99.9.9.9...9.99.........9.99.9.9.9..988.99......9988.....
            ..9999.99999...9.99.9.9.9...9996.99999...9996.99999...9.99.9.9.9...9996.99999...9.999........9..99..
            ..9996.99999...9996.99999...996..96998...996..96998...9996.99999...996..96998...9.99.9.9.9...9.99...
            ..996..96998...996..96998...996..99988...996..99988...996..96998...996..99988...9999.99999...9.99.9.
            ..996..99988...996..99988...66....988....66....988....996..99988...66....988....9996.99999...9996.99
            ..66....988.99.66....988...........9..99........9..99.66....988...........9..99.996..96998...996..96
            .........9.999........9..99........9.99.........9.99.........9..99........9.99..996..99988...996..99
            .........9.99.........9.99.........9.99.........9.99.........9.99.........9.99..66....988.99.66....9
            .9.9.9...9999.........9.99.........9996.........9996.........9.99.........9996.........9.999........
            .99999...9996.9.9.9...9996.........996..9.9.9...996..........9996.........996..........9.99.........
            .96998...996..99999...996..9.9.9...996..99999...996..........996..9.9.9...996..9.9.9...9999.........
            .99988...996..96998...996..99999...66...96998...66...9.9.9...996..99999...66...99999...9996.9.9.9...
            ..988....66...99988...66...96998........99988........99999...66...96998........96998...996..99999...
            ...9..99.......988.........99988.........988.........96998........99988........99988...996..96998...
            ...9.99.........9..99.......988...........9..99......99988.........988..........988....66...99988...
            ...9.99.9.9.9...9.99.........9..99........9.99........988...........9..99........9..99.......988....
            ...9996.99999...9.99.9.9.9...9.99.........9.99.9.9.9...9..99........9.99.........9.99.........9..99.
            ...996..96998...9996.99999...9.99.9.9.9...9996.99999...9.99.........9.99.9.9.9...9.99.9.9.9...9.99..
            ...996..99988...996..96998...9996........................................99999...9996.99999...9.99.9
            ...66....988....996..99988...996.........................................96998...996..96998...9996.9
            ..........9..99.66....988....996.........................................99988...996..99988...996..9
            ..........9.99.........9..99.66...........................................988....66....988....996..9
            ..........9.99.........9.99................................................9..99........9..99.66....
            ..........9996.........9.99................................................9.99.........9.99........
            ..........996..........9996................................................9.99.........9.99........
            ..........996..........996...........9............................9........9996.........9996........
            ....9.9.9.66...........996....9.9........................................9.996..........996.........
            ....99999........9.9.9.66.....999...................9....................9.996..........996.........
            ....96998........99999........969........................................8.66.....9.9.9.66..........
            ....99988........96998........999........................................8........99999........9.9.9
            .....988.........99988.........98.................................................96998........99999
            ......9..99.......988...........9.........................................99......99988........96998
            ......9.99.........9..99........9........................................99........988.........99988
            ......9.99.9.9.9...9.99.........9........................................99.9.9.9...9..99.......988.
            ......9996.99999...9.99.9.9.9...9........................................96.99999...9.99.........9..
            ......996..96998...9996.99999...9........................................6..96998...9.99.9.9.9...9.9
            ......996..99988...996..96998...9........................................6..99988...9996.99999...9.9
            ......66....988....996..99988...6...................9........................988....996..96998...999
            .............9..99.66....988..................................................9..99.996..99988...996
            .............9.99.........9..99...............................................9.99..66....988....996
            .............9.99.........9.99...........9....................................9.99.........9..99.66.
            ...9.9.9.....9996.........9.99................................................9996.........9.99.....
            ...99999.....9969.9.9.9...9996................................................996..........9.99.....
            ...96998.....9969.99999...996..9..................................9...........9969.9.9.....9996.....
            ...99988.....66.9.96998...996..99.........................................9...66.99999.....9969.9.9.
            ....988.........9.99988...66...96........................................99......96998.....9969.9999
            .....9..99.........988.........99........................................98......99988.....66.9.9699
            .....9.99...........9..99.......9........................................88.......988.........9.9998
            .....9.99.9.9.9.....9.99.................................................8.........9..99.........988
            .....9996.99999.....9.99.9.9.9.............................................99......9.99...........9.
            .....996..96998.....9996.99999........9.............................9.....99.......9.99.9.9.9.....9.
            .....996..99988.....996..96998......................9.....................99.9.9.9.9996.99999.....9.
            .....66....988......996..99988...........................................996.99999.996..96998.....99
            ............9..99...66....988............................................96..96998.996..99988.....99
            ............9.99...........9..99.........................................96..99988.66....988......99
            ............9.99...........9.99..........................................6....988.........9..99...66
            ............9996...........9.99................................................9..99......9.99......
            ............996............9996.........9.99.........9996.........9..99........9.99.......9.99......
            .......9.9.9996............996...9.9.9..9996..9.9.9..996..........9.99..9.9.9..9.99.......9996......
            .......9999966......9.9.9..996...99999..996...99999..996...9.9.9..9.99..99999..9996.......996.......
            .......96998........99999..66....96998..996...96998..66....99999..9996..96998..996...9.9.9996.......
            .......99988........96998........99988..66....99988........96998..996...99988..996...9999966......9.
            ........988.........99988.........988..........988.........99988..996....988...66....96998........99
            .........9..99.......988...........9..99........9..99.......988...66......9..99......99988........96
            .........9.99.........9..99........9.99.........9.99.........9..99........9.99........988.........99
            .........9.99.9.9.9...9.99.........9.99.9.9.9...9.99.9.9.9...9.99.........9.99.9.9.9...9..99.......9
            .........9996.99999...9.99.9.9.9...9996.99999...9996.99999...9.99.9.9.9...9996.99999...9.99.........
            .........996..96998...9996.99999...996..96998...996..96998...9996.99999...996..96998...9.99.9.9.9...
            .........996..99988...996..96998...996..99988...996..99988...996..96998...996..99988...9996.99999...
            ..9.9.9..66....988....996..99988...66....988....66....988....996..99988...66....988....996..96998...
            ..99999........99..99.66....988...........9..99........9..99.66....988...........9..99.996..99988...
            ..96998........99.99.........9..99........9.99.........9.99.........9..99.......99999..66....988....
            ..99988........99.99.........9.99.........9.99.........9.99.........9.99........99999........99..99.
            ...988.........99996.........9.99.........9996.........9996.........9.99..9.9.9.96998........99.99..
            ....9..99.......996..9.9.9...9996.........996..9.9.9...996...9.9.9..9996..99999.99988........99.99..
            ....9.99........996..99999...996..9.9.9...996..99999...996...99999..996...96998..988.........99996..
            ....9.99.9.9.9..66...96998...996..99999...66...96998...66....96998..996...99988..69..99.......996..9
            ....9996.99999.......99988...66...96998........99988.........99988..66.....988....9.99........996..9
            ....996..96998........988.........99988.........988...........988...........9..99.9.99.9.9.9..66...9
            ....996..99988.........9..99.......988...........9..99.........9..99........9.99..9996.99999.......9
            ....66....988..........9.99.........9..99........9.99..........9.99.........9.99.99969.96998........
            ...........9..99.......9.99.9.9.9...9.99.........9.99.9.9.9....9.99.9.9.9...9996.99969.99988........
            ...........9.99........9996.99999...9.99.9.9.9...9996.99999....9996.99999...996..96698..988.........
            ...........9.99........996..96998...9996.99999...996..96998....996..96998...996..99988...9..99......
            ...........9996........996..99988...996..96998...996..99988....996..99988...66....988....9.99.......
            ...........996.........66....988....996..99988...66....988...9.66....988...........9..99.9.99.......
            ...........996................9..99.66....988...........9..99.........9..99........9.99..9996.......
            ...........66.................9.99.........9..99........9.99..........9.99.........9.99..996........
            ..............................9.99.........9.99.........9.99..........9.99.........9996..996........
            ..............................9996.........9.99.........9996..........9996.........996...66.........
            ..............................996..........9996.........996...........996..........996..............
            ..............................996..........996..........996...........996..........66...............
            ..............................66...........996..........66............66............................
            `,img`
            ..............................9.9.9.....................9.9.9........9.9.9.....................9.9.9
            ..............................99999........9.9.9........99999........99999........9.9.9........99999
            .................9.9.9........89969........99999........89969........89969........99999........99999
            ....9.9.9........99999........88999........89969........88999........88999........89969........89969
            ....99999........99999.........889.........88999.........889..........889.........88999........88999
            ....89969........89969......99..9...........889.......99..9........99..9...........8899......99.889.
            ....88999........88999.......99.9........99..9.........99.9.........99.9........99..9........999.9..
            .....8899......99.889..9.9.9.99.9.........99.9...9.9.9.99.9...9.9.9.99.9.........99.9...9.9.9.99.9..
            ..99..9........999.9...99999.6999...9.9.9.99.9...99999.6999...99999.6999...9.9.9.99.9...99999.9999..
            ...99.9...9.9.9.99.9...89969..699...99999.6999...89969..699...89969..699...99999.6999...99999.6999..
            .9.99.9...99999.9999...88999..699...89969..699...88999..699...88999..699...89969..699...89969..699..
            99.6999...99999.6999....889....66...88999..699....889....66....889....66...88999..699...88999..699..
            69..699...89969..699.99..9...........889....66.99..9........99..9...........889....66.99.889....66..
            99..699...88999..699..99.9........99..9.........99.9.........99.9........99..9........999.9.........
            9....66.99.889....66..99.9.........99.9.........99.9.........99.9.........99.9.........99.9.........
            ........999.9.........6999.........99.9.........6999.........6999.........99.9.........9999...9.9.9.
            .........99.9..........699.........6999..........699...9.9.9..699.........6999...9.9.9.6999...99999.
            .........9999...9.9.9..699...9.9.9..699..........699...99999..699...9.9.9..699...99999..699...89969.
            ...9.9.9.6999...99999...66...99999..699...9.9.9...66...89969...66...99999..699...89969..699...88999.
            ...99999..699...89969........89969...66...99999........88999........89969...66...88999...66....889..
            ...89969..699...88999........88999........89969.........889.........88999.........889.......99..9...
            ...88999...66....889..........889.........88999......99..9...........889.......99..9.........99.9...
            ....889.......99..9........99..9...........889........99.9........99..9.........99.9...9.9.9.99.9...
            .99..9.........99.9.........99.9........99..9...9.9.9.99.9.........99.9...9.9.9.99.9...99999.6999...
            ..99.9...9.9.9.99.9...9.9.9.99.9.........99.9...99999.6999...9.9.9.99.9...99999.6999...89969..699...
            9.99.9...99999.6999...99999........................................6999...89969..699...88999..699...
            9.6999...89969..699...89969.........................................699...88999..699....889....66...
            9..699...88999..699...88999.........................................699....889....66.99..9..........
            9..699....889....66....889...........................................66.99..9.........99.9..........
            ....66.99..9........99..9................................................99.9.........99.9..........
            ........99.9.........99.9................................................99.9.........6999..........
            ........99.9.........99.9................................................6999..........699..........
            ........6999.........6999........9............................9...........699..........699..........
            .........699..........699.9........................................9.9....699...........66.9.9.9....
            .........699..........699.9....................9...................999.....66.9.9.9........99999....
            ..........66.9.9.9.....66.8........................................969........99999........89969....
            9.9.9........99999........8........................................999........89969........88999....
            99999........89969.................................................89.........88999.........889.....
            89969........88999......99.........................................9...........889.......99..9......
            88999.........889........99........................................9........99..9.........99.9......
            .889.......99..9...9.9.9.99........................................9.........99.9...9.9.9.99.9......
            ..9.........99.9...99999.69........................................9...9.9.9.99.9...99999.6999......
            9.9...9.9.9.99.9...89969..6........................................9...99999.6999...89969..699......
            9.9...99999.6999...88999..6........................................9...89969..699...88999..699......
            999...89969..699....889........................9...................6...88999..699....889....66......
            699...88999..699.99..9..................................................889....66.99..9.............
            699....889....66..99.9...............................................99..9.........99.9.............
            .66.99..9.........99.9....................................9...........99.9.........99.9.............
            .....99.9.........6999................................................99.9.........6999.....9.9.9...
            .....99.9..........699................................................6999...9.9.9.9699.....99999...
            .....6999.....9.9.9699...........9..................................9..699...99999.9699.....89969...
            .9.9.9699.....99999.66...9.........................................99..699...89969.9.66.....88999...
            9999.9699.....89969......99........................................69...66...88999.9.........889....
            9969.9.66.....88999......89........................................99.........889.........99..9.....
            8999.9.........889.......88........................................9.......99..9...........99.9.....
            889.........99..9.........8.................................................99.9.....9.9.9.99.9.....
            .9...........99.9......99.............................................9.9.9.99.9.....99999.6999.....
            .9.....9.9.9.99.9.......99.....9.............................9........99999.6999.....89969..699.....
            .9.....99999.6999.9.9.9.99.....................9......................89969..699.....88999..699.....
            99.....89969..699.99999.699...........................................88999..699......889....66.....
            99.....88999..699.89969..69............................................889....66...99..9............
            99......889....66.88999..69.........................................99..9...........99.9............
            66...99..9.........889....6..........................................99.9...........99.9............
            ......99.9......99..9................................................99.9...........6999............
            ......99.9.......99.9........99..9.........6999.........99.9.........6999............699............
            ......6999.......99.9..9.9.9..99.9..........699..9.9.9..6999..9.9.9...699............6999.9.9.......
            .......699.......6999..99999..99.9..9.9.9...699..99999...699..99999...699..9.9.9......6699999.......
            .......6999.9.9...699..89969..6999..99999....66..89969...699..89969....66..99999........89969.......
            .9......6699999...699..88999...699..89969........88999....66..88999........89969........88999.......
            99........89969....66...889....699..88999.........889..........889.........88999.........889........
            69........88999......99..9......66...889.......99..9........99..9...........889.......99..9.........
            99.........889........99.9........99..9.........99.9.........99.9........99..9.........99.9.........
            9.......99..9...9.9.9.99.9.........99.9...9.9.9.99.9...9.9.9.99.9.........99.9...9.9.9.99.9.........
            .........99.9...99999.6999...9.9.9.99.9...99999.6999...99999.6999...9.9.9.99.9...99999.6999.........
            ...9.9.9.99.9...89969..699...99999.6999...89969..699...89969..699...99999.6999...89969..699.........
            ...99999.6999...88999..699...89969..699...88999..699...88999..699...89969..699...88999..699.........
            ...89969..699....889....66...88999..699....889....66....889....66...88999..699....889....66..9.9.9..
            ...88999..699.99..9...........889....66.99..9........99..9...........889....66.99..99........99999..
            ....889....66..99999.......99..9.........99.9.........99.9........99..9.........99.99........89969..
            .99..99........99999........99.9.........99.9.........99.9.........99.9.........99.99........88999..
            ..99.99........89969.9.9.9..99.9.........6999.........6999.........99.9.........69999.........889...
            ..99.99........88999.99999..6999..9.9.9...699...9.9.9..699.........6999...9.9.9..699.......99..9....
            ..69999.........889..89969...699..99999...699...99999..699...9.9.9..699...99999..699........99.9....
            9..699.......99..96..88999...699..89969....66...89969...66...99999..699...89969...66..9.9.9.99.9....
            9..699........99.9....889.....66..88999.........88999........89969...66...88999.......99999.6999....
            9...66..9.9.9.99.9.99..9...........889...........889.........88999.........889........89969..699....
            9.......99999.6999..99.9........99..9.........99..9...........889.......99..9.........88999..699....
            ........89969.96999.99.9.........99.9..........99.9........99..9.........99.9..........889....66....
            ........88999.96999.6999...9.9.9.99.9....9.9.9.99.9.........99.9...9.9.9.99.9.......99..9...........
            .........889..89669..699...99999.6999....99999.6999...9.9.9.99.9...99999.6999........99.9...........
            ......99..9...88999..699...89969..699....89969..699...99999.6999...89969..699........99.9...........
            .......99.9....889....66...88999..699....88999..699...89969..699...88999..699........6999...........
            .......99.9.99..9...........889....66.9...889....66...88999..699....889....66.........699...........
            .......6999..99.9........99..9.........99..9...........889....66.99..9................699...........
            ........699..99.9.........99.9..........99.9........99..9.........99.9.................66...........
            ........699..6999.........99.9..........99.9.........99.9.........99.9..............................
            .........66...699.........6999..........6999.........99.9.........6999..............................
            ..............699..........699...........699.........6999..........699..............................
            ...............66..........699...........699..........699..........699..............................
            ............................66............66..........699...........66..............................
            `,img`
            9.9.9.....................9.9.9........9.9.9.....................9.9.9..............................
            99999........9.9.9........99999........99999........9.9.9........99999..............................
            99999........99999........96998........96998........99999........96998........9.9.9.................
            96998........96998........99988........99988........96998........99988........99999........9.9.9....
            99988........99988.........988..........988.........99988.........988.........99999........99999....
            .988.99......9988...........9..99........9..99.......988...........9..99......96998........96998....
            ..9.999........9..99........9.99.........9.99.........9..99........9.99.......99988........99988....
            ..9.99.9.9.9...9.99.........9.99.9.9.9...9.99.9.9.9...9.99.........9.99.9.9.9..988.99......9988.....
            ..9999.99999...9.99.9.9.9...9996.99999...9996.99999...9.99.9.9.9...9996.99999...9.999........9..99..
            ..9996.99999...9996.99999...996..96998...996..96998...9996.99999...996..96998...9.99.9.9.9...9.99...
            ..996..96998...996..96998...996..99988...996..99988...996..96998...996..99988...9999.99999...9.99.9.
            ..996..99988...996..99988...66....988....66....988....996..99988...66....988....9996.99999...9996.99
            ..66....988.99.66....988...........9..99........9..99.66....988...........9..99.996..96998...996..96
            .........9.999........9..99........9.99.........9.99.........9..99........9.99..996..99988...996..99
            .........9.99.........9.99.........9.99.........9.99.........9.99.........9.99..66....988.99.66....9
            .9.9.9...9999.........9.99.........9996.........9996.........9.99.........9996.........9.999........
            .99999...9996.9.9.9...9996.........996..9.9.9...996..........9996.........996..........9.99.........
            .96998...996..99999...996..9.9.9...996..99999...996..........996..9.9.9...996..9.9.9...9999.........
            .99988...996..96998...996..99999...66...96998...66...9.9.9...996..99999...66...99999...9996.9.9.9...
            ..988....66...99988...66...96998........99988........99999...66...96998........96998...996..99999...
            ...9..99.......988.........99988.........988.........96998........99988........99988...996..96998...
            ...9.99.........9..99.......988...........9..99......99988.........988..........988....66...99988...
            ...9.99.9.9.9...9.99.........9..99........9.99........988...........9..99........9..99.......988....
            ...9996.99999...9.99.9.9.9...9.99.........9.99.9.9.9...9..99........9.99.........9.99.........9..99.
            ...996..96998...9996.99999...9.99.9.9.9...9996.99999...9.99.........9.99.9.9.9...9.99.9.9.9...9.99..
            ...996..99988...996..96998...9996........................................99999...9996.99999...9.99.9
            ...66....988....996..99988...996.........................................96998...996..96998...9996.9
            ..........9..99.66....988....996.........................................99988...996..99988...996..9
            ..........9.99.........9..99.66...........................................988....66....988....996..9
            ..........9.99.........9.99................................................9..99........9..99.66....
            ..........9996.........9.99................................................9.99.........9.99........
            ..........996..........9996................................................9.99.........9.99........
            ..........996..........996...........9............................9........9996.........9996........
            ....9.9.9.66...........996....9.9........................................9.996..........996.........
            ....99999........9.9.9.66.....999...................9....................9.996..........996.........
            ....96998........99999........969........................................8.66.....9.9.9.66..........
            ....99988........96998........999........................................8........99999........9.9.9
            .....988.........99988.........98.................................................96998........99999
            ......9..99.......988...........9.........................................99......99988........96998
            ......9.99.........9..99........9........................................99........988.........99988
            ......9.99.9.9.9...9.99.........9........................................99.9.9.9...9..99.......988.
            ......9996.99999...9.99.9.9.9...9........................................96.99999...9.99.........9..
            ......996..96998...9996.99999...9........................................6..96998...9.99.9.9.9...9.9
            ......996..99988...996..96998...9........................................6..99988...9996.99999...9.9
            ......66....988....996..99988...6...................9........................988....996..96998...999
            .............9..99.66....988..................................................9..99.996..99988...996
            .............9.99.........9..99...............................................9.99..66....988....996
            .............9.99.........9.99...........9....................................9.99.........9..99.66.
            ...9.9.9.....9996.........9.99................................................9996.........9.99.....
            ...99999.....9969.9.9.9...9996................................................996..........9.99.....
            ...96998.....9969.99999...996..9..................................9...........9969.9.9.....9996.....
            ...99988.....66.9.96998...996..99.........................................9...66.99999.....9969.9.9.
            ....988.........9.99988...66...96........................................99......96998.....9969.9999
            .....9..99.........988.........99........................................98......99988.....66.9.9699
            .....9.99...........9..99.......9........................................88.......988.........9.9998
            .....9.99.9.9.9.....9.99.................................................8.........9..99.........988
            .....9996.99999.....9.99.9.9.9.............................................99......9.99...........9.
            .....996..96998.....9996.99999........9.............................9.....99.......9.99.9.9.9.....9.
            .....996..99988.....996..96998......................9.....................99.9.9.9.9996.99999.....9.
            .....66....988......996..99988...........................................996.99999.996..96998.....99
            ............9..99...66....988............................................96..96998.996..99988.....99
            ............9.99...........9..99.........................................96..99988.66....988......99
            ............9.99...........9.99..........................................6....988.........9..99...66
            ............9996...........9.99................................................9..99......9.99......
            ............996............9996.........9.99.........9996.........9..99........9.99.......9.99......
            .......9.9.9996............996...9.9.9..9996..9.9.9..996..........9.99..9.9.9..9.99.......9996......
            .......9999966......9.9.9..996...99999..996...99999..996...9.9.9..9.99..99999..9996.......996.......
            .......96998........99999..66....96998..996...96998..66....99999..9996..96998..996...9.9.9996.......
            .......99988........96998........99988..66....99988........96998..996...99988..996...9999966......9.
            ........988.........99988.........988..........988.........99988..996....988...66....96998........99
            .........9..99.......988...........9..99........9..99.......988...66......9..99......99988........96
            .........9.99.........9..99........9.99.........9.99.........9..99........9.99........988.........99
            .........9.99.9.9.9...9.99.........9.99.9.9.9...9.99.9.9.9...9.99.........9.99.9.9.9...9..99.......9
            .........9996.99999...9.99.9.9.9...9996.99999...9996.99999...9.99.9.9.9...9996.99999...9.99.........
            .........996..96998...9996.99999...996..96998...996..96998...9996.99999...996..96998...9.99.9.9.9...
            .........996..99988...996..96998...996..99988...996..99988...996..96998...996..99988...9996.99999...
            ..9.9.9..66....988....996..99988...66....988....66....988....996..99988...66....988....996..96998...
            ..99999........99..99.66....988...........9..99........9..99.66....988...........9..99.996..99988...
            ..96998........99.99.........9..99........9.99.........9.99.........9..99.......99999..66....988....
            ..99988........99.99.........9.99.........9.99.........9.99.........9.99........99999........99..99.
            ...988.........99996.........9.99.........9996.........9996.........9.99..9.9.9.96998........99.99..
            ....9..99.......996..9.9.9...9996.........996..9.9.9...996...9.9.9..9996..99999.99988........99.99..
            ....9.99........996..99999...996..9.9.9...996..99999...996...99999..996...96998..988.........99996..
            ....9.99.9.9.9..66...96998...996..99999...66...96998...66....96998..996...99988..69..99.......996..9
            ....9996.99999.......99988...66...96998........99988.........99988..66.....988....9.99........996..9
            ....996..96998........988.........99988.........988...........988...........9..99.9.99.9.9.9..66...9
            ....996..99988.........9..99.......988...........9..99.........9..99........9.99..9996.99999.......9
            ....66....988..........9.99.........9..99........9.99..........9.99.........9.99.99969.96998........
            ...........9..99.......9.99.9.9.9...9.99.........9.99.9.9.9....9.99.9.9.9...9996.99969.99988........
            ...........9.99........9996.99999...9.99.9.9.9...9996.99999....9996.99999...996..96698..988.........
            ...........9.99........996..96998...9996.99999...996..96998....996..96998...996..99988...9..99......
            ...........9996........996..99988...996..96998...996..99988....996..99988...66....988....9.99.......
            ...........996.........66....988....996..99988...66....988...9.66....988...........9..99.9.99.......
            ...........996................9..99.66....988...........9..99.........9..99........9.99..9996.......
            ...........66.................9.99.........9..99........9.99..........9.99.........9.99..996........
            ..............................9.99.........9.99.........9.99..........9.99.........9996..996........
            ..............................9996.........9.99.........9996..........9996.........996...66.........
            ..............................996..........9996.........996...........996..........996..............
            ..............................996..........996..........996...........996..........66...............
            ..............................66...........996..........66............66............................
            `],
        100,
        true
        )
        Kaisers_Predators_Eyes.startEffect(effects.spray)
        tiles.placeOnTile(Kaisers_Predators_Eyes, mySprite.tilemapLocation())
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 20000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 20000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(Kaisers_Predators_Eyes, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 20000, 100, 10)
        Kaisers_Predators_Eyes.follow(mySprite, 100)
    })
    pause(20000)
    Ult_Flow += -1
    sprites.destroy(Kaisers_Predators_Eyes)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
}
function Kaiser_Impact_Blitzkrieg () {
    if (mySprite.overlapsWith(myDart)) {
        if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile8`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Blitzkrieg", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            for (let value of sprites.allOfKind(SpriteKind.Goal)) {
                if (mySprite.overlapsWith(Target)) {
                    mySprite.setVelocity(spriteutils.angleFrom(mySprite, value), 0)
                    spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, value), 420)
                } else {
                    mySprite.setVelocity(spriteutils.angleFrom(mySprite, value), 0)
                }
            }
            controller.moveSprite(mySprite, 0, 0)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -400)
            myDart.ay = 0
            pause(500)
            controller.moveSprite(mySprite, 100, 100)
            myDart.setVelocity(0, 0)
        } else if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile9`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Blitzkrieg", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.setVelocity(0, randint(-100, -400))
            myDart.setBounceOnWall(true)
            pause(500)
            myDart.setBounceOnWall(false)
        } else {
            story.spriteSayText(mySprite, "Kaiser Impact: Blitzkrieg", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -420)
            myDart.ay = 0
            pause(500)
            myDart.setVelocity(0, 0)
        }
    }
}
function Rins_Ult () {
    ItoshiRins_Ult_Aura = sprites.create(img`
        ........................................
        .............fffffffffffff..............
        ...........fffffffffffffffff............
        .........fffffffffffffffffffff..........
        .......fffffffffffffffffffffffff........
        ......fffffffffffffffffffffffffff.......
        .....fffffffffffffffffffffffffffff......
        ....fffffffffffffffffffffffffffffff.....
        ...fffffffffffffffffffffffffffffffff....
        ...fffffffffffffffffffffffffffffffff....
        ..fffffffffffffffffffffffffffffffffff...
        ..fffffffffffffffffffffffffffffffffff...
        .fffffffffffffffffffffffffffffffffffff..
        .fffffffffffffffffffffffffffffffffffff..
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffff..
        .fffffffffffffffffffffffffffffffffffff..
        ..fffffffffffffffffffffffffffffffffff...
        ..fffffffffffffffffffffffffffffffffff...
        ...fffffffffffffffffffffffffffffffff....
        ...fffffffffffffffffffffffffffffffff....
        ....fffffffffffffffffffffffffffffff.....
        .....fffffffffffffffffffffffffffff......
        ......fffffffffffffffffffffffffff.......
        .......fffffffffffffffffffffffff........
        .........fffffffffffffffffffff..........
        ...........fffffffffffffffff............
        .............fffffffffffff..............
        `, SpriteKind.RinsUltAura)
    scaling.scaleByPixels(ItoshiRins_Ult_Aura, info.score() - info.life(), ScaleDirection.Uniformly, ScaleAnchor.Middle, true)
    ItoshiRins_Ult_Aura.setFlag(SpriteFlag.GhostThroughSprites, true)
    tiles.placeOnTile(ItoshiRins_Ult_Aura, mySprite.tilemapLocation())
    Ult = 1
    if (info.score() < info.life()) {
        controller.moveSprite(mySprite, 0, 0)
        story.spriteSayText(mySprite, "You Won't even let me lose?", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(mySprite, "I want to fight alone", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(mySprite, "But Blue Lock is keeping up with my play", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(mySprite, "Im Not alone?", 15, 1, story.TextSpeed.Slow)
        story.spriteSayText(mySprite, "What is this", 15, 1, story.TextSpeed.Slow)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b 6 4 4 6 b f e f f . 
            . f e e 4 1 6 d d 6 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        story.spriteSayText(mySprite, "It  Make me want to puke", 15, 2, story.TextSpeed.Slow)
        ItoshiRins_Ult_Aura.setImage(img`
            ........................................
            .............2222222222222..............
            ...........22222222222222222............
            .........f22222222222222222222..........
            .......ffff222222222222222222222........
            ......ffffff222222222222222222222.......
            .....fffffffff222222222222222222ff......
            ....ffffffffff222222222222222ffffff.....
            ...ffffffffffff2222222222fffffffffff....
            ...222222ffffff22222222fffffffffffff....
            ..22222222fffff22222222ffffffffffffff...
            ..222222222ffff22222222ffffffffffffff...
            .222222222222ff2222222fffffffffffffff2..
            .ff222222222222222222ffffffffffffffff2..
            fffff22222222222222ffffffffffffffffff22.
            ffffffff222222222ffffffffffffffffffff22.
            ffffffff22222222ffffffffffffffffff22222.
            fffffff22222222222ffffff222222222222222.
            fffffff22222222222222222222222222222222.
            222222222222222222222222222222222222222.
            222222222222222222222222222222222222222.
            222222222222222222222222222222222222222.
            222222222222222222222222222222222222222.
            222222222222222222222222222222222222fff.
            2222222222222222222222222222222ffffffff.
            ff2222222222222222222222222222fffffffff.
            fffff22222222222222222222ffffffffffffff.
            .ffffffffffff22222222222ffffffffffffff..
            .ffffffffffffff2222222ffffffffffffffff..
            ..ffffffffffff2222222ffffffffffffffff...
            ..fffffffffff2222222222ffffffffffffff...
            ...fffffffff222222222222ffffffffffff....
            ...fffffffff2222222222222222ffffffff....
            ....ffffffff222222222222222222fffff.....
            .....fffffff2222222222222222222222......
            ......fffff2222222222222222222222.......
            .......ffff222222222222222222222........
            .........ff2222222222222222222..........
            ...........22222222222222222............
            .............2222222222222..............
            `)
        scaling.scaleByPixels(ItoshiRins_Ult_Aura, (info.score() - info.life()) * 50, ScaleDirection.Uniformly, ScaleAnchor.Middle, true)
        story.spriteSayText(mySprite, "Ill Mangle you", 6, 2, story.TextSpeed.Slow)
        controller.moveSprite(mySprite, 100, 100)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.RinsUltAura)
}
function Snake_Intercept () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (spriteutils.distanceBetween(value, myDart) < 60) {
            Scoring_or_Trapping_probability.value += -10
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.EnemyDefense)) {
        if (spriteutils.distanceBetween(value, myDart) < 80) {
            Scoring_or_Trapping_probability.value += -5
        }
    }
    story.spriteSayText(mySprite, "" + convertToText(Scoring_or_Trapping_probability.value) + "%", 7, 15, story.TextSpeed.Slow)
    if (Math.percentChance(Scoring_or_Trapping_probability.value)) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 2000)
        spriteutils.setVelocityAtAngle(mySprite, spriteutils.angleFrom(mySprite, myDart), 100)
        pause(2000)
        spriteutils.setVelocityAtAngle(mySprite, spriteutils.angleFrom(mySprite, myDart), 0)
        tiles.placeOnTile(myDart, mySprite.tilemapLocation())
        myDart.follow(mySprite)
        story.spriteSayText(mySprite, "Nice Pass", 7, 1, story.TextSpeed.Normal)
    } else {
        controller.moveSprite(mySprite, 0, 0)
        pause(5000)
        controller.moveSprite(mySprite, 100, 100)
    }
    if (Scoring_or_Trapping_probability.value < 100) {
        Scoring_or_Trapping_probability.value = 100
        Scoring_or_Trapping_probability.value += 5
    }
}
// Moveset for kaiser
function Kaisers_cooldown_and_moves () {
    Blitz_Cooldown = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    mySprite.sayText("Miss", 100, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Kaisers_Bullseye, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        for (let value of sprites.allOfKind(SpriteKind.Goal)) {
            spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, value), 100)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 2000, 10, 10)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 2000, 10, 10)
        }
    }
})
scene.onOverlapTile(SpriteKind.EnemyDefense, sprites.castle.tileGrass1, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
})
function Ult_Direct_Shot () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 1000, 90, 90)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -400)
        myDart.ay = 0
        pause(500)
        myDart.setVelocity(0, 0)
    }
}
// Moves For rin
function Rins_Cooldowns_and_moves () {
    Opposite_Direction_Cooldown = 0
}
sprites.onOverlap(SpriteKind.EnemyDefense, SpriteKind.EnemyDefense, function (sprite, otherSprite) {
    sprite.setVelocity(50, 50)
})
function Flow_Direct_Shot () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 6000, 60, 30)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 6000, 60, 30)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -250)
        myDart.ay = 0
        pause(600)
        myDart.setVelocity(0, 0)
    }
}
function Relexive_movement () {
    controller.moveSprite(mySprite, 200, 200)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 2000)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 2000)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f 7 7 e e e 7 7 f f . . 
        . f f e f b f 7 7 f b f e f f . 
        . f e e 4 1 7 d d 7 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    pause(1000)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    controller.moveSprite(mySprite, 100, 100)
    Off_The_ball_Movement_Cooldown = 1000
}
function Direct_Shot () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -200)
        myDart.ay = 0
        pause(500)
        myDart.setVelocity(0, 0)
    }
}
sprites.onOverlap(SpriteKind.EnemyDefense, SpriteKind.Kaisers_Predator_Eye, function (sprite, otherSprite) {
    if (Ult_Flow == 1) {
        sprite.setVelocity(-100, 100)
    }
})
function Blitz () {
    if (Blitz_Cooldown == 0) {
        controller.moveSprite(mySprite, 250, 250)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 1000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 9 f f f f f f 9 e f . . 
            . . f f f 8 9 e e e 8 8 f f . . 
            . f f e f b f 9 9 f b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        pause(1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        controller.moveSprite(mySprite, 100, 100)
        Blitz_Cooldown = 500
    }
}
info.onCountdownEnd(function () {
    if (info.score() < info.life()) {
        game.gameOver(false)
    } else if (info.score() > info.life()) {
        game.gameOver(true)
    } else if (info.score() == info.life()) {
        Overtime = 1
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setTileAt(value, assets.tile`myTile2`)
        }
    }
})
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Ult != 1) {
        if (Isagi == 1) {
            Isagis_Flow()
        } else if (Rin == 1) {
            Rins_Flow()
        } else if (Kaiser == 1) {
            Kaisers_Flow_With_Predators_Eye()
        } else if (Aiku == 1) {
            Aikus_Flow()
        }
    } else if (Ult == 1) {
        if (Isagi == 1) {
            Puzzel_Flow()
        } else if (Rin == 1) {
            Destroyer_Flow()
        } else if (Kaiser == 1) {
            Kaisers_ult_Flow_With_Predators_Eye()
        }
    }
})
function Kaiser_Impact_Beinschuss () {
    if (mySprite.overlapsWith(myDart)) {
        if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile8`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Beinschuss", 2, 8)
            for (let value of sprites.allOfKind(SpriteKind.Goal)) {
                spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, value), 420)
            }
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.ay = 0
            pause(500)
            myDart.setVelocity(0, 0)
        } else if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile9`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Beinschuss", 2, 8)
            myDart.ay = randint(-420, 420)
        } else {
            story.spriteSayText(mySprite, "Kaiser Impact: Beinschuss", 2, 8)
            myDart.setVelocity(0, -420)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            pause(5000)
            myDart.setVelocity(0, 0)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Kaisers_Predator_Eye, function (sprite, otherSprite) {
    if (Ult_Flow == 1) {
        sprite.setVelocity(-100, 100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Isagi == 1) {
        myDart.setTrace(true)
        myDart.iter = 1
        myDart.traceColor = 9
        if (mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 100, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -100)
            myDart.ay = 0
            pause(100)
            myDart.setVelocity(0, 0)
        }
        if (Flow == 1 && mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 500, 100, 50)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -200)
            myDart.ay = 0
            pause(500)
            myDart.setVelocity(0, 0)
        }
    } else if (Rin == 1) {
        if (mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -100)
            myDart.ay = 0
            pause(100)
            myDart.setVelocity(0, 0)
        }
        if (Flow == 1 && mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 500, 100, 50)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -200)
            myDart.ay = -50
            myDart.ax = -100
            pause(500)
            myDart.ax = 0
            myDart.ay = 0
            myDart.setVelocity(0, 0)
        }
    } else if (Kaiser == 1) {
        if (mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 100, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 100, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -100)
            myDart.ay = 0
            pause(100)
            myDart.setVelocity(0, 0)
        }
        if (Flow == 1 && mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 500, 100, 50)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 500, 100, 50)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -200)
            myDart.ay = 0
            pause(500)
            myDart.setVelocity(0, 0)
        }
    } else if (Aiku == 1) {
        if (mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 100, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 100, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -100)
            myDart.ay = 0
            pause(100)
            myDart.setVelocity(0, 0)
        }
        if (Flow == 1 && mySprite.overlapsWith(myDart)) {
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 500, 100, 50)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 500, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -200)
            myDart.ay = 0
            pause(500)
            myDart.setVelocity(0, 0)
        }
    }
})
function Kaisers_Impact_Flow () {
    if (mySprite.overlapsWith(myDart)) {
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
        myDart.follow(mySprite, 0)
        myDart.setVelocity(0, -350)
        myDart.ay = 0
        pause(500)
        myDart.setVelocity(0, 0)
    }
}
function Puzzel_Flow () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 7 f f f f f f 7 e f . . 
            . . f f f 7 7 e e e 7 7 f f . . 
            . f f e f b 7 4 4 7 b f e f f . 
            . f e e 4 1 7 d d 7 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e 7 2 2 2 2 2 2 7 f f . . 
            . f f e 7 7 f f f f f 7 e f f . 
            . f f f f 7 7 e e e 7 f f f f . 
            . . f e f b 7 4 4 7 b f e f . . 
            . . f e 4 1 7 d d 7 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 7 f f f f f f 7 e f . . 
            . . f f f 7 7 e e e 7 7 f f . . 
            . f f e f b 7 4 4 7 b f e f f . 
            . f e e 4 1 7 d d 7 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        Ult_Flow += 1
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 10000, 100, 10)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    })
}
function Rins_Flow () {
    Flow += 1
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 10000, 100, 10)
    pause(10000)
    Flow += -1
}
browserEvents.Alt.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Isagi == 1) {
        Isagis_Ult()
    } else if (Rin == 1) {
        Rins_Ult()
    } else if (Kaiser == 1) {
        Kaisers_Ult()
    }
})
scene.onOverlapTile(SpriteKind.Projectile2, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile8`)
})
function Blitz_Flow () {
    if (Blitz_Cooldown == 0) {
        controller.moveSprite(mySprite, 250, 250)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 1000)
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 9 f f f f f f 9 e f . . 
            . . f f f 8 9 e e e 8 8 f f . . 
            . f f e f b f 9 9 f b f e f f . 
            . f e e 4 1 9 d d 9 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        pause(1000)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        controller.moveSprite(mySprite, 100, 100)
        Blitz_Cooldown = 300
    }
}
sprites.onOverlap(SpriteKind.Teammate, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 100)
    sprite.follow(otherSprite, 0)
    for (let value of sprites.allOfKind(SpriteKind.GoalBox)) {
        sprite.follow(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.follow(myDart, 70)
    }
})
// For  Isagi everything here is for him
function Isagis_Cooldowns_and_moves () {
    Off_The_ball_Movement_Cooldown = 0
}
function Kaiser_Impact_Magnus () {
    if (mySprite.overlapsWith(myDart)) {
        if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile8`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Magnus", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.follow(mySprite, 0)
            for (let value of sprites.allOfKind(SpriteKind.Goal)) {
                spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(mySprite, value), 420)
            }
            pause(5000)
            myDart.setVelocity(0, 0)
        } else if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile9`)) {
            story.spriteSayText(mySprite, "Kaiser Impact: Magnus", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.ax = randint(-400, 400)
            myDart.setVelocity(0, randint(-400, 400))
            pause(5000)
            myDart.ax = 0
            myDart.setVelocity(0, 0)
        } else {
            story.spriteSayText(mySprite, "Kaiser Impact: Magnus", 2, 8)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            extraEffects.createSpreadEffectOnAnchor(myDart, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 5000, 48, 20)
            myDart.follow(mySprite, 0)
            myDart.setVelocity(0, -420)
            myDart.ax = -400
            pause(5000)
            myDart.setVelocity(0, 0)
            myDart.ax = 0
        }
    }
}
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Isagi == 1) {
        if (Flow == 1) {
            Flow_Direct_Shot()
        } else if (Ult == 1) {
            Ult_Direct_Shot()
        } else {
            Direct_Shot()
        }
    } else if (Rin == 1) {
        if (Flow == 1) {
            Flow_Curve_Shot()
        } else if (Ult == 1) {
            Trivela()
        } else {
            Curve_Shot()
        }
    } else if (Kaiser == 1) {
        if (Flow == 1) {
            Kaisers_Impact_Flow()
        } else if (Ult == 1) {
            if (mySprite.overlapsWith(myDart)) {
                if (spriteutils.distanceBetween(mySprite, mySprite2) < 100) {
                    Kaiser_Impact_Blitzkrieg()
                } else {
                    Kaiser_Impact_Magnus()
                }
            }
            if (spriteutils.distanceBetween(mySprite, myDart) < 80) {
                Kaiser_Impact_Beinschuss()
            }
        } else {
            Kaisers_Impact()
        }
    } else if (Aiku == 1) {
        if (spriteutils.distanceBetween(mySprite, myDart) < 80) {
            if (mySprite.overlapsWith(myDart)) {
                Snake_clearance()
            } else {
                Snake_Intercept()
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    myDart.follow(mySprite, 0)
    myDart.follow(mySprite2, 0)
    myDart.ay = 0
    myDart.vy = 0
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.follow(mySprite, 0)
        value.follow(myDart, 70)
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
        value.follow(myDart, 70)
        tiles.placeOnRandomTile(value, sprites.castle.tileGrass1)
    }
    for (let value of sprites.allOfKind(SpriteKind.EnemyDefense)) {
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(myDart, assets.tile`myTile5`)
    info.changeScoreBy(1)
})
let ItoshiRins_Ult_Aura: Sprite = null
let mySprite3: Sprite = null
let Opposite_Direction_Cooldown = 0
let no3: Sprite = null
let no2: Sprite = null
let no1: Sprite = null
let mySprite8: Sprite = null
let mySprite4: Sprite = null
let Kaisers_Predators_Eyes: Sprite = null
let Ult_Flow = 0
let Target: Sprite = null
let Overtime = 0
let Blitz_Cooldown = 0
let Off_The_ball_Movement_Cooldown = 0
let DefenseSight: Sprite = null
let Defender: Sprite = null
let mySprite7: Sprite = null
let mySprite2: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let myDart: Dart = null
let mySprite: Sprite = null
let Scoring_or_Trapping_probability: StatusBarSprite = null
let Aiku = 0
let Kaiser = 0
let Rin = 0
let Isagi = 0
let Ult = 0
let Flow = 0
let Projectiles_on_screen = 0
Projectiles_on_screen = 0
info.setScore(0)
info.setLife(0)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Isagi "),
miniMenu.createMenuItem("Rin"),
miniMenu.createMenuItem("Kaiser"),
miniMenu.createMenuItem("Aiku"),
miniMenu.createMenuItem("Chigiri"),
miniMenu.createMenuItem("Nagi"),
miniMenu.createMenuItem("Sae")
)
myMenu.setTitle("Character Select")
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        myMenu.close()
        Flow = 0
        Ult = 0
        Isagi = 1
    } else if (selectedIndex == 1) {
        myMenu.close()
        Flow = 0
        Ult = 0
        Rin = 1
    } else if (selectedIndex == 2) {
        myMenu.close()
        Flow = 0
        Ult = 0
        Kaiser = 1
    } else if (selectedIndex == 3) {
        myMenu.close()
        Flow = 0
        Ult = 0
        Aiku = 1
        Scoring_or_Trapping_probability = statusbars.create(0, 0, StatusBarKind.Probability)
        Scoring_or_Trapping_probability.value = 100
    }
    info.startCountdown(120)
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    controller.moveSprite(mySprite)
    for (let index = 0; index < 4; index++) {
        mySprite5 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 2 2 5 5 2 2 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Teammate)
        mySprite5.follow(myDart, 100)
        tiles.placeOnRandomTile(mySprite5, sprites.castle.tileGrass1)
        mySprite6 = sprites.create(img`
            999999999999999999999999999999
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            9............................9
            999999999999999999999999999999
            `, SpriteKind.Teammate_Barrier)
        tiles.placeOnTile(mySprite6, mySprite5.tilemapLocation())
        mySprite6.follow(mySprite5, 100)
        mySprite6.setFlag(SpriteFlag.Invisible, true)
    }
    for (let index = 0; index < 4; index++) {
        mySprite2 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Enemy)
        mySprite2.follow(myDart, 70)
        mySprite7 = sprites.create(img`
            333333333333333333333333333333
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            3............................3
            333333333333333333333333333333
            `, SpriteKind.EnemyBarrier)
        tiles.placeOnTile(mySprite7, mySprite7.tilemapLocation())
        mySprite7.follow(mySprite2, 100)
        mySprite7.setFlag(SpriteFlag.Invisible, true)
    }
    for (let index = 0; index < 4; index++) {
        Defender = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e 1 b f f f f b 1 e f . 
            e 4 1 f f f f f f 1 4 e . 
            e e 1 1 1 1 1 1 1 1 e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.EnemyDefense)
        tiles.placeOnRandomTile(Defender, assets.tile`transparency16`)
        DefenseSight = sprites.create(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            `, SpriteKind.EnemyDefenderView)
        DefenseSight.setFlag(SpriteFlag.Invisible, true)
        tiles.placeOnTile(DefenseSight, Defender.tilemapLocation())
        DefenseSight.follow(Defender)
    }
    tiles.placeOnRandomTile(myDart, assets.tile`myTile5`)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, img`
        .............cc.
        ............cbbc
        ............cbbc
        ...........bdcc.
        ...........bdbb.
        ..........bddc..
        ..........bdbb..
        .........bddc...
        .........bdbb...
        ........bddc....
        ........bdbb....
        .......bddc.....
        .......bdbb.....
        ......bddc......
        ......bdbb......
        .....bddc.......
        .....bdbb.......
        ....bddc........
        ....bdbb........
        ...bddc.........
        ...bdbb.........
        ..bddc..........
        ..bdbb..........
        .bddc...........
        .bdbb...........
        b1dc............
        b11c............
        b11c............
        b11c.........cc.
        b11c........cbbc
        b11c........cbbc
        b11c.......bdcc.
        b11c.......bdbb.
        b11c......bddc..
        b11bccc...bdbb..
        b11bbbbcccddc...
        b11bcccbccdbb...
        b11b..ccbddc....
        b11b...ccdbbc...
        b11b...bddcbc...
        b11b...bdbbcbc..
        b11b..bddc.fbc..
        b11b..bdbb.fbf..
        b11b.bddc..fcf..
        b11b.bdbb..fcf..
        b11bbddc...fcf..
        b11bbdbb...fcf..
        b11bddc...cfcfc.
        b11ddbb..cbfcfbc
        b1dddc...cdfffdc
        b1ddbb...cdcfcdc
        cdddc....cbdddbc
        cddbb....cbbbbbc
        cddc.....cbbbbbc
        cdbb.....cbbbbbc
        .cc......cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........8bbbbb8
        .........8bbbbb8
        .........6bbbbb6
        ..........6bbb6.
        ...........666..
        `, SpriteKind.EnemyGoal)
    tileUtil.createSpritesOnTiles(assets.tile`myTile`, img`
        .............cc.
        ............cbbc
        ............cbbc
        ...........bdcc.
        ...........bdbb.
        ..........bddc..
        ..........bdbb..
        .........bddc...
        .........bdbb...
        ........bddc....
        ........bdbb....
        .......bddc.....
        .......bdbb.....
        ......bddc......
        ......bdbb......
        .....bddc.......
        .....bdbb.......
        ....bddc........
        ....bdbb........
        ...bddc.........
        ...bdbb.........
        ..bddc..........
        ..bdbb..........
        .bddc...........
        .bdbb...........
        b1dc............
        b11c............
        b11c............
        b11c.........cc.
        b11c........cbbc
        b11c........cbbc
        b11c.......bdcc.
        b11c.......bdbb.
        b11c......bddc..
        b11bccc...bdbb..
        b11bbbbcccddc...
        b11bcccbccdbb...
        b11b..ccbddc....
        b11b...ccdbbc...
        b11b...bddcbc...
        b11b...bdbbcbc..
        b11b..bddc.fbc..
        b11b..bdbb.fbf..
        b11b.bddc..fcf..
        b11b.bdbb..fcf..
        b11bbddc...fcf..
        b11bbdbb...fcf..
        b11bddc...cfcfc.
        b11ddbb..cbfcfbc
        b1dddc...cdfffdc
        b1ddbb...cdcfcdc
        cdddc....cbdddbc
        cddbb....cbbbbbc
        cddc.....cbbbbbc
        cdbb.....cbbbbbc
        .cc......cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........8bbbbb8
        .........8bbbbb8
        .........6bbbbb6
        ..........6bbb6.
        ...........666..
        `, SpriteKind.Goal)
    tileUtil.createSpritesOnTiles(assets.tile`myTile`, img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.GoalBox)
    tileUtil.createSpritesOnTiles(assets.tile`myTile0`, img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.EnemyGoalBox)
    for (let value of sprites.allOfKind(SpriteKind.EnemyGoalBox)) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
    for (let value of sprites.allOfKind(SpriteKind.GoalBox)) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
})
game.onUpdate(function () {
    if (Off_The_ball_Movement_Cooldown > 0) {
        if (Ult_Flow != 1) {
            Off_The_ball_Movement_Cooldown += -1
        } else if (Ult_Flow == 1) {
            Off_The_ball_Movement_Cooldown += -20
        }
    } else if (Opposite_Direction_Cooldown > 0) {
        if (Ult_Flow != 1) {
            Opposite_Direction_Cooldown += -1
        } else if (Ult_Flow == 1) {
            Opposite_Direction_Cooldown += -20
        }
    } else if (Blitz_Cooldown > 0) {
        if (Ult_Flow != 1) {
            Blitz_Cooldown += -1
        } else if (Ult_Flow == 1) {
            Blitz_Cooldown += -20
        }
    } else {
    	
    }
})
game.onUpdate(function () {
    if (Overtime == 1) {
        if (info.score() < info.life()) {
            game.gameOver(false)
        } else if (info.score() > info.life()) {
            game.setGameOverMessage(true, "GOAL!!!!!!!!!!!!")
            game.gameOver(true)
        }
    }
})
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Teammate)) {
        if (value.overlapsWith(myDart)) {
            if (spriteutils.distanceBetween(value, mySprite) > 100 && spriteutils.distanceBetween(value, mySprite) < 200) {
                spriteutils.setVelocityAtAngle(myDart, spriteutils.angleFrom(value, mySprite), 200)
                tiles.placeOnTile(myDart, mySprite.tilemapLocation())
                myDart.follow(mySprite)
            }
        }
    }
})
